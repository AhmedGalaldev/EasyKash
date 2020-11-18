import { Component, OnInit } from '@angular/core';
import { Transaction } from './transaction.model';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {
  loadedTransactions: Transaction[] = [];
  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {
    this.transactionService.fetchTransactions().subscribe((transaction) => {
      this.loadedTransactions = transaction;

      console.log(transaction);
    });
  }
}
