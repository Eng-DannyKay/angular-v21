import { Component, signal, viewChild } from '@angular/core';
import { Menu, MenuBar, MenuContent, MenuItem } from "@angular/aria/menu";
import {OverlayModule} from '@angular/cdk/overlay';

@Component({
  selector: 'app-menu-bar',
  imports: [Menu,MenuBar,MenuContent,MenuItem,OverlayModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css',
})
export class MenuBarComponent {

fileMenu = viewChild<Menu<string>>('fileMenu');
  shareMenu = viewChild<Menu<string>>('shareMenu');
  editMenu = viewChild<Menu<string>>('editMenu');
  viewMenu = viewChild<Menu<string>>('viewMenu');
  insertMenu = viewChild<Menu<string>>('insertMenu');
  imageMenu = viewChild<Menu<string>>('imageMenu');
  chartMenu = viewChild<Menu<string>>('chartMenu');
  formatMenu = viewChild<Menu<string>>('formatMenu');
  textMenu = viewChild<Menu<string>>('textMenu');
  sizeMenu = viewChild<Menu<string>>('sizeMenu');
  paragraphMenu = viewChild<Menu<string>>('paragraphMenu');
  alignMenu = viewChild<Menu<string>>('alignMenu');
  rendered = signal(false);
  onFocusIn() {
    this.rendered.set(true);
  }
}
