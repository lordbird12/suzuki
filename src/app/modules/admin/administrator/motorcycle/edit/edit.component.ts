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
    lastValueFrom,
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
import { AssetType, BranchPagination } from '../page.types';
import { Service } from '../page.service';
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
    public UserAppove: any = [];
    itemData: any = [];
    // branchId = 2;
    Id: any;
    files: File[] = [];

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
    public StyleList: any = [];

    public SpeedList: any = [];
    // me: any | null;
    // get roleType(): string {
    //     return 'marketing';
    // }

    supplierId: string | null;
    pagination: BranchPagination;

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
            id: '',
            name: ['', Validators.required],
            image: '',
            style_id: '',
            speed_id: '',
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
     async ngOnInit(): Promise<void> {

        this._Service.getStyle().subscribe((resp: any) => {
            this.StyleList = resp.data;

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });


        this.Id = this._activatedRoute.snapshot.paramMap.get('id');

        this._Service.getById(this.Id).subscribe((resp: any) => {
            this.itemData = resp.data;
            console.log(this.itemData);
            this.formData.patchValue({
                id: this.itemData.id,
                name: this.itemData.name,

                style_id: this.itemData.style.id,
                speed_id: this.itemData.speed.id,

            });
            this._Service.getSpeed(this.itemData.style.id).subscribe((resp: any) => {
                this.SpeedList = resp.data;
                this._changeDetectorRef.markForCheck();
            });



        });
    }

    approve(): FormArray {
        return this.formData.get('approve') as FormArray;
    }

    NewUser(): FormGroup {
        return this._formBuilder.group({
            user_id: '',
            remark: '',
        });
    }

    addUser(): void {
        this.approve().push(this.NewUser());

        // alert(1)
    }

    onChange(event:any): void {
        this._Service.getSpeed(event).subscribe((resp: any) => {
            this.SpeedList = resp.data;
            this._changeDetectorRef.markForCheck();
        });
    }

    removeUser(i: number): void {
        this.approve().removeAt(i);
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
    

    Edit(): void {
        this.flashMessage = null;
        this.flashErrorMessage = null;
   
        const confirmation = this._fuseConfirmationService.open({
            title: 'เพิ่มรถจักรยานยนต์',
            message: 'คุณต้องการเพิ่มรถจักรยานยนต์ใหม่ใช่หรือไม่ ',
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
            if (result === 'confirmed') {
                const formData = new FormData();
                Object.entries(this.formData.value).forEach(
                    ([key, value]: any[]) => {
                        formData.append(key, value);
                    }
                );
                this._Service.update(formData).subscribe({
                    next: (resp: any) => {
                        this._router.navigateByUrl('motorcycle/list').then(() => {});
                    },
                    error: (err: any) => {
                        this._fuseConfirmationService.open({
                            title: 'กรุณาระบุข้อมูล',
                            message:
                                'ไม่สามารถบันทึกข้อมูลได้กรุณาตรวจสอบใหม่อีกครั้ง',
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
                    },
                });
            }
        });
    }

    // updateBank(): void {
    //     this.flashMessage = null;
    //     this.flashErrorMessage = null;
    //     // Return if the form is invalid
    //     // if (this.formData.invalid) {
    //     //     return;
    //     // }
    //     // Open the confirmation dialog
    //     const confirmation = this._fuseConfirmationService.open({
    //         title: 'แก้ไขบัญชีธนาคาร',
    //         message: 'คุณต้องการแก้ไขบัญชีธนาคารใช่หรือไม่ ',
    //         icon: {
    //             show: false,
    //             name: 'heroicons_outline:exclamation',
    //             color: 'warning',
    //         },
    //         actions: {
    //             confirm: {
    //                 show: true,
    //                 label: 'ยืนยัน',
    //                 color: 'primary',
    //             },
    //             cancel: {
    //                 show: true,
    //                 label: 'ยกเลิก',
    //             },
    //         },
    //         dismissible: true,
    //     });

    //     // Subscribe to the confirmation dialog closed action
    //     // confirmation.afterClosed().subscribe((result) => {
    //     //     // If the confirm button pressed...
    //     //     if (result === 'confirmed') {
    //     //         console.log(this.formData.value);
    //     //         // Disable the form
    //     //         this.formData.disable();
    //     //         this._Service.update(this.formData.value, this.Id).subscribe({
    //     //             next: (resp: any) => {
    //     //                 this.showFlashMessage('success');
    //     //                 this._router.navigateByUrl('bank/list').then(() => {});
    //     //             },
    //     //             error: (err: any) => {
    //     //                 this.formData.enable();
    //     //                 this._fuseConfirmationService.open({
    //     //                     title: 'กรุณาระบุข้อมูล',
    //     //                     message: err.error.message,
    //     //                     icon: {
    //     //                         show: true,
    //     //                         name: 'heroicons_outline:exclamation',
    //     //                         color: 'warning',
    //     //                     },
    //     //                     actions: {
    //     //                         confirm: {
    //     //                             show: false,
    //     //                             label: 'ยืนยัน',
    //     //                             color: 'primary',
    //     //                         },
    //     //                         cancel: {
    //     //                             show: false,
    //     //                             label: 'ยกเลิก',
    //     //                         },
    //     //                     },
    //     //                     dismissible: true,
    //     //                 });
    //     //                 console.log(err.error.message);
    //     //             },
    //     //         });

    //     //         // Sign in
    //     //         // this._Service.createUser(this.userForm.value)
    //     //         //     .subscribe({
    //     //         //         next: (res) => {
    //     //         //             console.log(res);
    //     //         //         },
    //     //         //         error: (err: HttpErrorResponse) => {
    //     //         //             this.userForm.enable();
    //     //         //             this.flashMessage = 'error';

    //     //         //             if (err.error.error['message'] === 'This attribute must be unique') {
    //     //         //                 this.flashErrorMessage = 'Username is already';
    //     //         //             } else {
    //     //         //                 this.flashErrorMessage = err.error.error['message'];
    //     //         //             }
    //     //         //         },
    //     //         //         complete: () => {
    //     //         //             this._location.back();
    //     //         //         },
    //     //         //     }
    //     //         //     );
    //     //     }
    //     // });
    // }
    

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

    onSelect(event) {
        console.log(event);
        this.files.push(...event.addedFiles);
        // Trigger Image Preview
        setTimeout(() => {
            this._changeDetectorRef.detectChanges()
        }, 150)
        this.formData.patchValue({
            image: this.files[0],
        });
        console.log(this.formData.value)
    }

    CheckUserAppove(event): void {
        console.log(event);
        let formValue = this.formData.value.user_id;
        if (event.checked === true) {
            this.UserAppove.push(event.source.value);
            this.formData.patchValue({
                user_id: this.UserAppove,
            });

            

            // this.dataForm.get('componentData')['controls'][i].get('componentForm')['controls'][j].patchValue(formValue[j])
        } else {
            // this.UserAppove = this.UserAppove.filter((item) => item !== event.target.value)

            this.UserAppove = this.UserAppove.filter(function (
                value,
                index,
                arr
            ) {
                return value != event.checked;
            });
            this.formData.patchValue({
                user_id: this.UserAppove,
            });
        }
    }
}
