import React, { Component } from 'react';
import axios from 'axios';
import Layout from './Layout';
class Dangky extends Component {
	constructor(props) {
		super();
		this.state = {
			ho_ten: '',
			tai_khoan: '',
			email: '',
			mat_khau: '',
			sdt: '',
			dia_chi: '',
			nhap_lai_mat_khau: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		let name = event.target.name;
		let value = event.target.value;
		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		const { ho_ten, tai_khoan, email, mat_khau, sdt, dia_chi } = this.state;
		const dk = {
			ho_ten: ho_ten,
			tai_khoan: tai_khoan,
			email: email,
			mat_khau: mat_khau,
			sdt: sdt,
			dia_chi: dia_chi
		};
		axios
			.post(`http://127.0.0.1:8000/api/dangky`, dk)
			.then((res) => {
				this.props.history.push('/');
				console.log(res.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	render() {
		return (
			<Layout>
				{/* Page Header */}
				<header className="masthead" style={{ backgroundImage: 'url("img/home-bg.jpg")' }}>
					<div className="overlay" />
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-md-10 mx-auto">
								<div className="site-heading">
									<h1>Dang ky</h1>
								</div>
							</div>
						</div>
					</div>
				</header>
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-10 mx-auto">
							{/* Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work. */}
							{/* WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address! */}
							{/* To use the contact form, your site must be on a live web host with PHP! The form will not work locally! */}
							<form onSubmit={this.handleSubmit} name="sentMessage" id="contactForm">
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Ho Va Ten</label>
										<input
											value={this.state.ho_ten}
											onChange={this.handleChange}
											type="text"
											className="form-control"
											placeholder="Ho Va Ten"
											id="HoVaTen"
											name="ho_ten"
											required
											data-validation-required-message="Please enter your name."
										/>
										<p className="help-block text-danger" />
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Tai khoan</label>
										<input
											value={this.state.tai_khoan}
											onChange={this.handleChange}
											type="text"
											className="form-control"
											placeholder="Tai khoan"
											id="Taikhoan"
											name="tai_khoan"
											required
											data-validation-required-message="Please enter your name."
										/>
										<p className="help-block text-danger" />
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Mat khau</label>
										<input
											value={this.state.mat_khau}
											onChange={this.handleChange}
											type="text"
											className="form-control"
											placeholder="Mat khau"
											id="Matkhau"
											name="mat_khau"
											required
											data-validation-required-message="Please enter your email address."
										/>
										<p className="help-block text-danger" />
									</div>
								</div>
								<div className="control-group">
									<div className="form-group col-xs-12 floating-label-form-group controls">
										<label>Nhap lai mat khau</label>
										<input
											value={this.state.nhap_lai_mat_khau}
											onChange={this.handleChange}
											type="text"
											className="form-control"
											placeholder="Nhap lai mat khau"
											id="nhaplaimatkhau"
											name="nhap_lai_mat_khau"
											required
											data-validation-required-message="Please enter your phone number."
										/>
										<p className="help-block text-danger" />
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Email</label>
										<input
											value={this.state.email}
											onChange={this.handleChange}
											className="form-control"
											placeholder="Email"
											id="Email"
											name="email"
											required
											data-validation-required-message="Please enter a message."
											defaultValue={''}
										/>
										<p className="help-block text-danger" />
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>SDT</label>
										<input
											value={this.state.sdt}
											onChange={this.handleChange}
											className="form-control"
											placeholder="sdt"
											id="sdt"
											name="sdt"
											required
											data-validation-required-message="Please enter a message."
											defaultValue={''}
										/>
										<p className="help-block text-danger" />
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Dia chi</label>
										<input
											value={this.state.dia_chi}
											onChange={this.handleChange}
											className="form-control"
											placeholder="Dia chi"
											id="Diachi"
											name="dia_chi"
											required
											data-validation-required-message="Please enter a message."
											defaultValue={''}
										/>
										<p className="help-block text-danger" />
									</div>
								</div>
								<br />
								<div id="success" />
								<button type="submit" className="btn btn-primary" id="sendMessageButton">
									Send
								</button>
							</form>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default Dangky;
