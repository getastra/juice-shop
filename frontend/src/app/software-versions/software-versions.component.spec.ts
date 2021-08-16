/*
 * Copyright (c) 2014-2021 Bjoern Kimminich.
 * SPDX-License-Identifier: MIT
 */

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { SlideshowModule } from 'ng-simple-slideshow'
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { SoftwareVersionsComponent } from './software-versions.component'
import { MatCardModule } from '@angular/material/card'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { of } from 'rxjs'
import { ConfigurationService } from '../Services/configuration.service'

describe('SoftwareVersionsComponent', () => {
  let component: SoftwareVersionsComponent
  let fixture: ComponentFixture<SoftwareVersionsComponent>
  let slideshowModule
  let configurationService

  beforeEach(waitForAsync(() => {
    slideshowModule = jasmine.createSpy('SlideshowModule') // FIXME Replace with actual import if https://github.com/dockleryxk/ng-simple-slideshow/issues/70 gets fixed
    configurationService = jasmine.createSpyObj('ConfigurationService', ['getApplicationConfiguration'])
    configurationService.getApplicationConfiguration.and.returnValue(of({ application: { } }))

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        HttpClientTestingModule,
        MatCardModule
      ],
      declarations: [SoftwareVersionsComponent],
      providers: [
        { provide: SlideshowModule, useValue: slideshowModule },
        { provide: ConfigurationService, useValue: configurationService }
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareVersionsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })
})
