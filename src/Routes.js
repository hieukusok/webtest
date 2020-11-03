import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Chitiet from './page/Chitiet';
import Home from './page/Home';
import React from 'react';
import ctdanhmuc from './page/ctdanhmuc';
import dangky from './page/Dangky';
import Dangnhap from './page/Dangnhap';
import CTThuonghieu from './page/ctthuonghieu';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/sanpham/:id" component={Chitiet} />
			<Route exact path="/danhmuc/:id" component={ctdanhmuc} />
			<Route exact path="/dangky" component={dangky} />
			<Route exact path="/dangnhap" component={Dangnhap} />
			<Route exact path="/thuonghieu/:id" component={CTThuonghieu} />
		</Switch>
	);
};
export default Routes;
