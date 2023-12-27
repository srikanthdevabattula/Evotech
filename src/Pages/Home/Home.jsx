import Chart from "./components/Chart";
import DashboardOptions from "./components/DashboardOptions";
import DashboardRight from "./components/DashboardRight";
import DashboardTabs from "./components/DashboardTabs";
import NewArrivals from "./components/NewArrivals";
import SalesProgress from "./components/SalesProgress";
import Services from "./components/Services";

import "./home.css";
const Home = () => {
	return (
	<div className="bg-[#EEF0F8]  pb-8">
		<DashboardOptions/>
		<div className="flex md:flex-wrap">
			<DashboardTabs/>
			<DashboardRight/>
		</div>
		<div className="flex mx-8 sm:mx-1 md:flex-wrap ">
		<SalesProgress/>
		<NewArrivals/>
		</div>

		<div className="flex md:flex-wrap">
			<Chart/>
			<Services/>
		</div>
	</div>
	);
};

export default Home;
