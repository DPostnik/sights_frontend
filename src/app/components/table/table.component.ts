import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TableCol} from '@model/table';
import {PageEvent} from '@angular/material/paginator';
import {MatMenuTrigger} from '@angular/material/menu';
import {Router} from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  displayedColumns?: string[];
  @Input() dataSource!: any[];
  @Input() tableCols!: TableCol[];
  @Input() total!: number;
  @Input() enableContextMenu = false;
  @Output() handlePage = new EventEmitter<number>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.displayedColumns = this.tableCols?.map((item) => item.def);
  }

  handleChangePage(event: PageEvent) {
    this.handlePage.emit(event.pageIndex);
  }

  @ViewChild(MatMenuTrigger)
  contextMenu?: MatMenuTrigger;

  contextMenuPosition = {x: '0px', y: '0px'};

  onContextMenu(event: MouseEvent, id: number) {
    if (!this.contextMenu) {
      return;
    }
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = {item: id};
    this.contextMenu?.openMenu();
  }

  async view(id: number) {
    await this.router.navigate(['sight', id]);
  }

  async edit(id: number) {
    await this.router.navigate([`/admin/edit`, id]);
  }

  remove(id: number) {
    console.log(id);
  }
}
