import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserModalData} from '@model/shared/userModalData';
import {Store} from '@ngxs/store';
import {UpdateUserInfo} from "@store/actions/user.actions";

@Component({
  selector: 'app-user-edit-modal',
  templateUrl: './user-edit-modal.component.html',
  styleUrls: ['./user-edit-modal.component.scss'],
})
export class UserEditModalComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  submitted = false;
  errorMessage: string = '';

  constructor(
    public dialogRef: MatDialogRef<UserEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserModalData,
    private store: Store,
  ) {}

  onClose() {
    this.dialogRef.close();
  }

  onSave() {
    const updatedUser: UserModalData = {
      photoUrl: this.form.get('photoUrl')?.value || this.data.photoUrl,
      name: this.form.get('name')?.value || this.data.name,
      id: this.data.id,
    }
    this.store.dispatch(new UpdateUserInfo(updatedUser));
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.data.name, [Validators.required]),
      photoUrl: new FormControl(this.data.photoUrl),
    });
  }
}
