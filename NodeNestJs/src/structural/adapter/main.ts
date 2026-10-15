
import { PizzaStore } from './pizza-store';
import { FastPaySdk } from './fast-pay-sdk';
import { LegacyBankGateway } from './legacy-bank-gateway';
import { FastPayAdapter, LegacyBankAdapter } from './adapters';

async function run() {
  const modern = new PizzaStore(new FastPayAdapter(new FastPaySdk()));
  const legacy = new PizzaStore(new LegacyBankAdapter(new LegacyBankGateway()));

  await modern.checkout('Margherita', 65);
  await modern.checkout('Pizza Gigante', 150);
  await legacy.checkout('Pepperoni', 65);
  await legacy.checkout('Pizza Gigante', 150);
}

void run();
