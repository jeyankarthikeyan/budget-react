import './App.css';
import {Container } from 'semantic-ui-react'
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

const App = () => {
  return (
    <Container>
      <MainHeader title='Budget'/>
      <DisplayBalance title='your balance' value='23868,13.43' size='small' textAlign='left'/>
      <DisplayBalances />

      <MainHeader title='Expenses' type='h3' />
      <EntryLine description='something' value='332' />
      <EntryLine description='something' value='332' isExpense />
      <EntryLine description='something' value='332' />

      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm />
    </Container>
  );
}

export default App;
