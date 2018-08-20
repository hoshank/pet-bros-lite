import { Component, Input } from '@angular/core';
// app
import { MenuItem } from '../../interfaces/MenuItem';

@Component({
    selector: 'petbros-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {

    @Input() item: MenuItem;

}
