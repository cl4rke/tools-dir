var React = require('react/addons');

ToolsPagination = React.createClass({
	getInitialState: function () {
		return {
			route: this.props.route || '#'
		}
	},
	propTypes: {
		route: React.PropTypes.string
	},
	render: function () {
		var pages = [];

		for (var i = 0; i < this.props.pageCount; i++) {
			pages.push({key: i+1});
		};

		var classSet = React.addons.classSet;

		var pageListItem = function (page) {

			var classNames = classSet({
				'current': this.props.page == page.key
			});

			return (
				<li key={page.key} className={classNames}>
					<a href={this.state.route+"/"+page.key}
						onClick={this.props.skip.bind(null, page.key)}>
							{page.key}
					</a>
				</li>
			);
		};

		var prevClassNames = classSet({
			'arrow': true,
			'unavailable': this.props.page <= 1
		});

		var nextClassNames = classSet({
			'arrow': true,
			'unavailable': this.props.page >= this.props.pageCount
		});

		return (
			<div className="pagination-centered">
				<ul className="pagination">
					<li className={prevClassNames}>
						<a href={
							this.state.route+"/"+
							(this.props.page)
							}
							onClick={
								this.props.page > 1?
								this.props.prev: null
							}>&laquo;</a>
					</li>
					{pages.map(pageListItem, this)}
					<li className={nextClassNames}>
						<a href={
							this.state.route+"/"+
							(this.props.page)
							}

							onClick={
								this.props.page < this.props.pageCount?
								this.props.next: null
							}>&raquo;</a>
					</li>
				</ul>
			</div>
		);
	}
});

module.exports = ToolsPagination;
