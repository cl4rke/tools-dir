var React = require('react');
var prettyLists = require('pretty-lists');
var UserModalContents = require('../modals/user-modal-contents');

var UserRow = React.createClass({
	getInitialState: function () {
		return {};
	},
	propTypes: {
		user: React.PropTypes.object.isRequired,
		setModalContents: React.PropTypes.func.isRequired
	},
	handleRoleChange: function () {
		var user = this.props.user;

		user.role = (parseInt(user.role)+1)%2;

		$.post('/user/update/'+user.id, {role: user.role});
		this.forceUpdate();
	},
	handleAccept: function () {
		var user = this.props.user;

		user.accepted = (parseInt(user.accepted)+1)%2;

		$.post('/user/update/'+user.id, {accepted: user.accepted});
		this.forceUpdate();
	},
	createLi: function (item, i) {
		return <li key={i}> {item} </li>
	},
	modalPresentable: function (items, attr1, attr2) {
		var items2 = prettyLists.getItemsDisplay(items, attr1, attr2);
		return items2.map(this.createLi, this);
	},
	profile: function profile() {
		return (
			<UserModalContents user={this.props.user} />
		);
	},
	render: function () {
		var user = this.props.user;
		var roleChangeButton = user.role == 1? (
				<button className="button primary"
					onClick={this.handleRoleChange}>
					Admin
				</button>
			) : (
				<button className="button secondary"
					onClick={this.handleRoleChange}>
					User
				</button>
			)
		var acceptButton = user.accepted == 1? (
				<button className="button success"
					onClick={this.handleAccept}>
					Accepted
				</button>
			) : (
				<button className="button secondary"
					onClick={this.handleAccept}>
					Pending
				</button>
			)
		return (
			<tr>
				<td className="animated fadeIn"> {user.id} </td>
				<td className="animated fadeIn">
					<a href="#" data-reveal-id="myModal"
						onClick={this.props.setModalContents.bind(null,
							<h2> {user.name} <small>{user.username}</small> </h2>,
							this.profile())}>
						{user.username}
					</a> </td>
				<td className="animated fadeIn"> {user.gender} </td>
				<td className="animated fadeIn"> {user.occupation} </td>
				<td className="animated fadeIn">
					<a href="#" data-reveal-id="myModal"
						onClick={this.props.setModalContents.bind(null,
							<h2>Votes</h2>, this.modalPresentable(
								user.upvotes, 'title'))}>
						{user.upvotes.length||''}
					</a>
				</td>
				<td className="animated fadeIn">
					<a href="#" data-reveal-id="myModal"
						onClick={this.props.setModalContents.bind(null,
							<h2>Views</h2>, this.modalPresentable(
								user.tools_viewed, 'title'))}>
						{user.tools_viewed.length||''}
					</a>
				</td>
				<td className="animated fadeIn">
					<a href="#" data-reveal-id="myModal"
						onClick={this.props.setModalContents.bind(null,
							<h2>Downloads</h2>, this.modalPresentable(
								user.downloads, 'pivot.created_at', 'title'))}>
						{user.downloads.length||''}
					</a>
				</td>
				<td className="animated fadeIn">
					<a href="#" data-reveal-id="myModal"
						onClick={this.props.setModalContents.bind(null,
							<h2>Comments</h2>, this.modalPresentable(
								user.tools_commented, 'title'))}>
						{user.tools_commented.length||''}
					</a>
				</td>
				<td className="animated fadeIn"> {user.created_at} </td>
				<td className="animated fadeIn"> {roleChangeButton} </td>
				<td className="animated fadeIn"> {acceptButton} </td>
			</tr>
		);
	}
});

module.exports = UserRow;
