import "../css/pagination.css";

export default function Pagination() {
	return (
		<>
			<div className="pagination">
				<button className="pagination-btn">&lt;</button>
				<div className="pagination-page">
					<span>1</span>
					<span>2</span>
					<span className="active-page">3</span>
					<span>4</span>
					<span>5</span>
				</div>
				<button className="pagination-btn">&gt;</button>
			</div>
		</>
	);
}
