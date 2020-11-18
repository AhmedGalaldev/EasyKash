import { Component, OnInit } from '@angular/core';
import { Transaction } from './transaction.model';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {
  loadTransactions: Transaction[] = [];
  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {
    this.transactionService.fetchTransactions().subscribe((transaction) => {
      this.loadTransactions = transaction;
      console.log(transaction);
    });
  }
}
