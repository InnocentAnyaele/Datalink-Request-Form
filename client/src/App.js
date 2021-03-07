// import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './components/landing/Landing';
import StudentRequestFormPage from './components/forms/StudentRequestFormPage';
import DefermentRequestFormPage from './components/forms/DefermentRequestFormPage';
import TransferRequestFormPage from './components/forms/TransferRequestFormPage';
import ClearanceRequestFormPage from './components/forms/ClearanceRequestFormPage';
import FinancialDepartment from './components/financialDepartment/FinancialDepartment';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route
					path='/studentRequestFormPage'
					component={StudentRequestFormPage}
				/>
				<Route
					path='/defermentRequestFormPage'
					component={DefermentRequestFormPage}
				/>
				<Route
					path='/transferRequestFormPage'
					component={TransferRequestFormPage}
				/>
				<Route
					path='/clearanceRequestFormPage'
					component={ClearanceRequestFormPage}
				/>
				<Route path='/financialDepartment' component={FinancialDepartment} />
			</Switch>
		</Router>
	);
}

export default App;
