import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticleInputI } from '../../types/article.interface';
import { backEndErrorsInterface } from '../../types/backEndErrors.interface';

@Component({
  selector: 'conduit-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
  @Input() initialValues: ArticleInputI;
  @Input() isSubmiting: boolean;
  @Input() errors: backEndErrorsInterface | null;
  @Output() articleSubmitEvent = new EventEmitter<ArticleInputI>();
  articleForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.articleForm = this.fb.group({
      title: this.initialValues.title,
      description: this.initialValues.description,
      body: this.initialValues.body,
      tagList: this.initialValues.tagList.join(' ')
    })
  }

  onSubmit(): void {
    this.articleSubmitEvent.emit(this.articleForm.value)
  }
}
