import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { dangxuatThunk } from '../thunks/authThunk';
import { danhMucThunk } from '../thunks/danhMucThunk';

const mapDispatchToProps = { dangxuatThunk, danhMucThunk };
const mapStateToProps = (state) => ({
	dangnhap: state.auth.dangnhap,
	danhmuc: state.dm.danhmuc
});
class Home extends Component {
	constructor(props) {
		super();
		this.state = {
			danhmuc: [],
			thuonghieu: []
		};
		this.handleDangxuat = this.handleDangxuat.bind(this);
	}
	componentDidMount() {
		danhMucThunk();
		axios.get(`http://127.0.0.1:8000/api/thuonghieu`).then((res) => {
			const thuonghieu = res.data.data;
			this.setState({ thuonghieu });
		});
	}
	handleDangxuat(event) {
		event.preventDefault();
		this.props.dangxuatThunk(this.props.history);
	}
	render() {
		return (
			<>
				{/* Navigation */}
				<nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
					<div className="container">
						<Link className="navbar-brand btn-tc" to="/">
							WebSite
						</Link>
						<button
							className="navbar-toggler navbar-toggler-right"
							type="button"
							data-toggle="collapse"
							data-target="#navbarResponsive"
							aria-controls="navbarResponsive"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							Menu
							<i className="fas fa-bars" />
						</button>
						<div className="collapse navbar-collapse" id="navbarResponsive">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<Link className="nav-link" to="/">
										Home
									</Link>
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										data-toggle="dropdown"
										href="#!"
										role="button"
										aria-haspopup="true"
										aria-expanded="false"
									>
										Danh muc
									</a>
									<div className="dropdown-menu">
										{this.props.danhmuc.dsdm.map((dm) => (
											<Link className="dropdown-item" to={`/danhmuc/${dm.id}`} key={dm.id}>
												{dm.ten_dm}
											</Link>
										))}
									</div>
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										data-toggle="dropdown"
										href="#!"
										role="button"
										aria-haspopup="true"
										aria-expanded="false"
									>
										Thuong Hieu
									</a>
									<div className="dropdown-menu">
										{this.state.thuonghieu.map((th) => (
											<Link className="dropdown-item" to={`/thuonghieu/${th.id}`} key={th.id}>
												{th.ten_th}
											</Link>
										))}
									</div>
								</li>

								{this.props.dangnhap.isAuthenticated ? (
									<li className="nav-item dropdown">
										<a
											className="nav-link dropdown-toggle"
											data-toggle="dropdown"
											href="#!"
											role="button"
											aria-haspopup="true"
											aria-expanded="false"
										>
											{this.props.dangnhap.user.tai_khoan}
										</a>
										<div className="dropdown-menu">
											<a className="dropdown-item" href="#!">
												Thong tin
											</a>
											<a className="dropdown-item" href="#!" onClick={this.handleDangxuat}>
												Dang xuat
											</a>
										</div>
									</li>
								) : (
									<>
										<li className="nav-item">
											<Link className="nav-link" to="/dangnhap">
												Dang nhap
											</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" to="/dangky">
												Dang ky
											</Link>
										</li>
									</>
								)}
							</ul>
						</div>
					</div>
				</nav>
				{this.props.children}
				<hr />
				{/* Footer */}
				<footer>
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-md-10 mx-auto">
								<ul className="list-inline text-center">
									<li className="list-inline-item">
										<a href="#!">
											<span className="fa-stack fa-lg">
												<i className="fas fa-circle fa-stack-2x" />
												<i className="fab fa-twitter fa-stack-1x fa-inverse" />
											</span>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="#!">
											<span className="fa-stack fa-lg">
												<i className="fas fa-circle fa-stack-2x" />
												<i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
											</span>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="#!">
											<span className="fa-stack fa-lg">
												<i className="fas fa-circle fa-stack-2x" />
												<i className="fab fa-github fa-stack-1x fa-inverse" />
											</span>
										</a>
									</li>
								</ul>
								<p className="copyright text-muted">Copyright © Your Website 2020</p>
							</div>
						</div>
					</div>
				</footer>
			</>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
