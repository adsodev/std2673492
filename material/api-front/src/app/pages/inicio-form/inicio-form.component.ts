import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { IDatos } from '../shared/models/datos';

@Component({
  selector: 'app-inicio-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inicio-form.component.html',
  styleUrl: './inicio-form.component.css'
})
export class InicioFormComponent implements OnChanges {
  @Input() data: IDatos | null = null;
  @Output() onCloseModel = new EventEmitter();
  inicioForm: FormGroup;

  constructor(private fb: FormBuilder, private ApiService: ApiService) {
    this.inicioForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
    })
  }

  ngOnChanges(): void {
    if (this.data) {
      this.inicioForm.patchValue({
        title: this.data.title,
        body: this.data.body,
      });
    }
  }

  onClose() {
    this.onCloseModel.emit(false);
  }

  onSubmit() {
    console.log(this.inicioForm);
    if (this.inicioForm.valid) {
      if (this.data) {
        this.ApiService.putMethod(this.data.id as number, this.inicioForm.value).subscribe({
          next: (response) => {
            this.onClose();
          }
        })
      } else {
        this.ApiService.postMethod(this.inicioForm.value).subscribe({
          next: (response) => {
            this.onClose();
          }
        })
      }
    } else {
      this.inicioForm.markAllAsTouched();
    }
  }
}