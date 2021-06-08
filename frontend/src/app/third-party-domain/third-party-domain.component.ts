/*
 * Copyright (c) 2014-2021 Bjoern Kimminich.
 * SPDX-License-Identifier: MIT
 */

import { ConfigurationService } from '../Services/configuration.service'
import { Component, OnInit } from '@angular/core'
import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'
import { faCommentAlt, faComments, faGraduationCap, faUniversity } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt as farCommentAlt, faComments as farComments } from '@fortawesome/free-regular-svg-icons'

library.add(faBitcoin, faUniversity, faGraduationCap, faCommentAlt, faComments, farCommentAlt, farComments)
dom.watch()

@Component({
  selector: 'app-third-party-domain',
  templateUrl: './third-party-domain.component.html',
  styleUrls: ['./third-party-domain.component.scss']
})
export class ThirdPartyComponent implements OnInit {
  public altcoinName = 'Juicycoin'
  constructor (private readonly configurationService: ConfigurationService) { }

  ngOnInit () {
    this.configurationService.getApplicationConfiguration().subscribe((config: any) => {
      if (config?.application?.altcoinName) {
        this.altcoinName = config.application.altcoinName
      }
    }, (err) => console.log(err))
  }
}
