import "./index.css";
export default function App() {
	return (
		<main className="section-main">
			<Options />
			<StorageMeter />
			<Level />
		</main>
	);
}
function Options() {
	return (
		<section className="section__1">
			<div className="section__1-heading">
				<img src="/images/logo.svg" alt="logo" className="section__1-logo" />
			</div>
			<div className="section__1-icons">
				<div className="section__1-icon-box">
					<img
						src="/images/icon-document.svg"
						alt="logo"
						className="section__1-icon"
					/>
				</div>
				<div className="section__1-icon-box">
					<img
						src="/images/icon-folder.svg"
						alt="logo"
						className="section__1-icon"
					/>
				</div>
				<div className="section__1-icon-box">
					<img
						src="/images/icon-upload.svg"
						alt="logo"
						className="section__1-icon"
					/>
				</div>
			</div>
		</section>
	);
}
function Level() {
	return (
		<section className="section__2">
			<div className="section__2-heading">
				You've used <strong> 815 GB</strong> of your storage
			</div>
			<div className="level__scale">
				<div className="level"></div>
			</div>
			<div className="digital__scale">
				<span className="instial__level">0 GB</span>
				<span className="final__level">1000 GB</span>
			</div>
		</section>
	);
}
function StorageMeter() {
	return (
		<div className="storage__meter">
			<strong>185</strong> <span>GB LEFT</span>
		</div>
	);
}
