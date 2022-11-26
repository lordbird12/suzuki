import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
    debounceTime,
    map,
    merge,
    Observable,
    Subject,
    switchMap,
    takeUntil,
    Subscription,
} from 'rxjs';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'environments/environment';
import { AuthService } from 'app/core/auth/auth.service';
import { sortBy, startCase } from 'lodash-es';
import { AssetType, Pagination } from '../quest.types';
import { Service } from '../quest.service';
// import { ImportOSMComponent } from '../card/import-osm/import-osm.component';

@Component({
    selector: 'new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.scss'],

    animations: fuseAnimations,
})
export class NewComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(MatPaginator) private _paginator: MatPaginator;
    @ViewChild(MatSort) private _sort: MatSort;

    files: File[] = [];
    files2: File[] = [];

    formData: FormGroup;
    flashErrorMessage: string;
    flashMessage: 'success' | 'error' | null = null;
    isLoading: boolean = false;
    searchInputControl: FormControl = new FormControl();
    selectedProduct: any | null = null;
    filterForm: FormGroup;
    tagsEditMode: boolean = false;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    private subscription: Subscription = new Subscription();

    env_path = environment.API_URL;

    QuestTypeData: any;
    QuestSubTypeData: any;
    QuestGroupData: any;

    supplierId: string | null;
    pagination: Pagination;

    reuseData: any = [
        { value: true, name: 'เปิดใช้งาน' },
        { value: false, name: 'ปิดใช้งาน' },
    ];

    categoryData: any = [
        { value: 'person', name: 'Person' },
    ];

    typeData: any = [{ value: 'nomal', name: 'Normal' }];

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseConfirmationService: FuseConfirmationService,
        private _formBuilder: FormBuilder,
        private _Service: Service,
        private _matDialog: MatDialog,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.formData = this._formBuilder.group({
            questTypeId: ['', Validators.required],
            questSubTypeId: ['', Validators.required],
            questGroupId: ['', Validators.required],
            name: ['', Validators.required],
            str: [0, Validators.required],
            vit: [0, Validators.required],
            int: [0, Validators.required],
            agi: [0, Validators.required],
            dex: [0, Validators.required],
            exp: [0, Validators.required],
            reuse: ['', Validators.required],
            exp_reuse: ['', Validators.required],
            value: [0, Validators.required],
            time: ['', Validators.required],
            type: ['', Validators.required],
            category: ['', Validators.required],
            item: this._formBuilder.array([]),
        });
        this.getQuestType();
        this.getQuestSubType();
        this.getQuestGroup();
    }

    getQuestType(): void {
        this._Service.getQuestType().subscribe((resp) => {
            this.QuestTypeData = resp.data;
        });
    }

    getQuestSubType(): void {
        this._Service.getQuestSubType().subscribe((resp) => {
            this.QuestSubTypeData = resp.data;
        });
    }

    getQuestGroup(): void {
        this._Service.getQuestGroup().subscribe((resp) => {
            this.QuestGroupData = resp.data;
        });
    }

    item(): FormArray {
        return this.formData.get('item') as FormArray;
    }

    newItem(): FormGroup {
        return this._formBuilder.group({
            itemId: '',
            qty: '',
        });
    }

    removeItem(i: number): void {
        this.item().removeAt(i);
    }

    addItem(): void {
        this.item().push(this.newItem());
    }

    discard(): void {}

    /**
     * After view init
     */
    ngAfterViewInit(): void {}

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
        this.addItem();
    }

    create(): void {
        this.flashMessage = null;
        this.flashErrorMessage = null;
        // Return if the form is invalid
        // if (this.formData.invalid) {
        //     return;
        // }
        // Open the confirmation dialog
        const confirmation = this._fuseConfirmationService.open({
            title: 'สร้างเควสใหม่',
            message: 'คุณต้องการสร้างเควสใหม่ใช่หรือไม่ ',
            icon: {
                show: false,
                name: 'heroicons_outline:exclamation',
                color: 'warning',
            },
            actions: {
                confirm: {
                    show: true,
                    label: 'ยืนยัน',
                    color: 'primary',
                },
                cancel: {
                    show: true,
                    label: 'ยกเลิก',
                },
            },
            dismissible: true,
        });

        // Subscribe to the confirmation dialog closed action
        confirmation.afterClosed().subscribe((result) => {
            // If the confirm button pressed...
            if (result === 'confirmed') {
                this._Service.create(this.formData.value).subscribe({
                    next: (resp: any) => {
                        this._router.navigateByUrl('quest/list').then(() => {});
                    },
                    error: (err: any) => {
                        this._fuseConfirmationService.open({
                            title: 'กรุณาระบุข้อมูล',
                            message: err.error.message,
                            icon: {
                                show: true,
                                name: 'heroicons_outline:exclamation',
                                color: 'warning',
                            },
                            actions: {
                                confirm: {
                                    show: false,
                                    label: 'ยืนยัน',
                                    color: 'primary',
                                },
                                cancel: {
                                    show: false,
                                    label: 'ยกเลิก',
                                },
                            },
                            dismissible: true,
                        });
                        console.log(err.error.message);
                    },
                });
            }
        });
    }

    onSelect(event) {
        this.files.push(...event.addedFiles);
        // Trigger Image Preview
        setTimeout(() => {
            this._changeDetectorRef.detectChanges();
        }, 150);
        this.formData.patchValue({
            image: this.files[0],
        });
    }

    onRemove(event) {
        this.files.splice(this.files.indexOf(event), 1);
        this.formData.patchValue({
            image: [],
        });
    }

    onSelect2(event) {
        this.files2.push(...event.addedFiles);
        // Trigger Image Preview
        setTimeout(() => {
            this._changeDetectorRef.detectChanges();
        }, 150);
        this.formData.patchValue({
            imageDetail: this.files2[0],
        });
    }

    onRemove2(event) {
        this.files2.splice(this.files2.indexOf(event), 1);
        this.formData.patchValue({
            imageDetail: [],
        });
    }

    showFlashMessage(type: 'success' | 'error'): void {
        // Show the message
        this.flashMessage = type;

        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Hide it after 3 seconds
        setTimeout(() => {
            this.flashMessage = null;

            // Mark for check
            this._changeDetectorRef.markForCheck();
        }, 3000);
    }
}
