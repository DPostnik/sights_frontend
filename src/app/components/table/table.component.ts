import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ContextMenuActions, TableCol} from '@model/shared/table';
import {PageEvent} from '@angular/material/paginator';
import {MatMenuTrigger} from '@angular/material/menu';

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
  @Input() contextMenuActions?: ContextMenuActions[] | undefined;
  @Output() handlePage = new EventEmitter<number>();

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
}
