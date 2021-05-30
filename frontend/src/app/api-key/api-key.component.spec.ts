/*
 * Copyright (c) 2014-2021 Bjoern Kimminich.
 * SPDX-License-Identifier: MIT
 */

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { SlideshowModule } from 'ng-simple-slideshow'
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { ApikeyComponent } from './api-key.component'
import { MatCardModule } from '@angular/material/card'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { of } from 'rxjs'
import { ConfigurationService } from '../Services/configuration.service'

describe('apikeyComponent', () => {
  let component: ApikeyComponent
  let fixture: ComponentFixture<ApikeyComponent>
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
      declarations: [ApikeyComponent],
      providers: [
        { provide: SlideshowModule, useValue: slideshowModule },
        { provide: ConfigurationService, useValue: configurationService }
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ApikeyComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should set Twitter link as obtained from configuration', () => {
    configurationService.getApplicationConfiguration.and.returnValue(of({ application: { social: { twitterUrl: 'TWITTER' } } }))
    component.ngOnInit()

    expect(component.twitterUrl).toBe('TWITTER')
  })

  it('should set Facebook link as obtained from configuration', () => {
    configurationService.getApplicationConfiguration.and.returnValue(of({ application: { social: { facebookUrl: 'FACEBOOK' } } }))
    component.ngOnInit()

    expect(component.facebookUrl).toBe('FACEBOOK')
  })

  it('should set Slack link as obtained from configuration', () => {
    configurationService.getApplicationConfiguration.and.returnValue(of({ application: { social: { slackUrl: 'SLACK' } } }))
    component.ngOnInit()

    expect(component.slackUrl).toBe('SLACK')
  })

  it('should set Reddit link as obtained from configuration', () => {
    configurationService.getApplicationConfiguration.and.returnValue(of({ application: { social: { redditUrl: 'REDDIT' } } }))
    component.ngOnInit()

    expect(component.redditUrl).toBe('REDDIT')
  })

  it('should set press kit link as obtained from configuration', () => {
    configurationService.getApplicationConfiguration.and.returnValue(of({ application: { social: { pressKitUrl: 'PRESS_KIT' } } }))
    component.ngOnInit()

    expect(component.pressKitUrl).toBe('PRESS_KIT')
  })
})
