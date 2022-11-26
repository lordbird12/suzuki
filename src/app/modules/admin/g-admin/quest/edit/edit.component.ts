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
    selector: 'edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss'],
    animations: fuseAnimations,
})
export class EditComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(MatPaginator) private _paginator: MatPaginator;
    @ViewChild(MatSort) private _sort: MatSort;

    statusData = [
        { id: '0', name: 'ปิดการใช้งาน' },
        { id: '1', name: 'เปิดการใช้งาน' },
    ];

    id: string;
    itemData: any = [];

    formData: FormGroup;
    flashErrorMessage: string;
    flashMessage: 'success' | 'error' | null = null;
    isLoading: boolean = false;
    searchInputControl: FormControl = new FormControl();
    selectedProduct: any | null = null;
    filterForm: FormGroup;
    tagsEditMode: boolean = false;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
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

    categoryData: any = [{ value: 'person', name: 'Person' }];

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
    ) {
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
            status: '',
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.getQuestType();
        this.getQuestSubType();
        this.getQuestGroup();
        this.id = this._activatedRoute.snapshot.paramMap.get('id');
        this._Service.getById(this.id).subscribe((resp: any) => {
            this.itemData = resp.data;
            this.formData.patchValue({
                name: this.itemData.name,
                questTypeId:
                    this.itemData.questType != null
                        ? this.itemData.questType.id
                        : null,
                questSubTypeId:
                    this.itemData.questSubType != null
                        ? this.itemData.questSubType.id
                        : null,
                questGroupId:
                    this.itemData.questGroup != null
                        ? this.itemData.questGroup.id
                        : null,
                str: this.itemData.str,
                vit: this.itemData.vit,
                int: this.itemData.int,
                agi: this.itemData.agi,
                dex: this.itemData.dex,
                exp: this.itemData.exp,
                reuse: this.itemData.reuse,
                exp_reuse: this.itemData.exp_reuse,
                value: this.itemData.value,
                time: this.itemData.time,
                type: this.itemData.type,
                category: this.itemData.category,
                item: [],
                status: this.itemData.status,
            });
        });
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
        // Unsubscribe from all subscriptions
    }

    update(): void {
        this.flashMessage = null;
        this.flashErrorMessage = null;
        // Return if the form is invalid
        // if (this.formData.invalid) {
        //     return;
        // }
        // Open the confirmation dialog
        const confirmation = this._fuseConfirmationService.open({
            title: 'แก้ไขรายการ',
            message: 'คุณต้องการแก้ไขรายการใช่หรือไม่ ',
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
                // Disable the form
                this._Service.update(this.formData.value, this.id).subscribe({
                    next: (resp: any) => {
                        this._router
                            .navigateByUrl('quest/list')
                            .then(() => {});
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