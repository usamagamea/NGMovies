import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatDto, listDto } from '../../models/list';
import { Pattern } from '../../models/pattern';
import { CrudService } from './../../services/crud.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss'],
})
export class MovieAddComponent implements OnInit {
  messageList: listDto[] = [];

  constructor(private formBuilder: FormBuilder, private crud: CrudService) {}
  form: FormGroup = new FormGroup({
    name: this.formBuilder.control(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+'),
      ])
    ),
    description: this.formBuilder.control(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+'),
      ])
    ),
    image: this.formBuilder.control(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(Pattern.ImageValidation),
      ])
    ),
    category_id: this.formBuilder.control(
      '',
      Validators.compose([Validators.required])
    ),
  });

  ngOnInit(): void {
    this.getLists();
  }

  onSubmit() {
    this.crud.createForm(this.form.value).subscribe((data) => {
      console.log(data);
    });
  }

  getLists() {
    this.crud.getMovies().subscribe((category: any) => {
      this.messageList = category.message as listDto[];
    });
  }
}
