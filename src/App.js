import React from 'react';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/Burger_Builder/Burger_Builder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div>
			<Layout>
				<Switch>
					<Route path='/orders' component={Orders}/>
					<Route path="/checkout" component={Checkout}/>
					<Route path="/" component={BurgerBuilder}/>
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
