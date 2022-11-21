import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useRef, useState } from "react";
import { addDays } from "date-fns";
import tr from "date-fns/locale/tr";

const DateRangePickerComp = () => {
	//* date state
	const [range, setRange] = useState([
		{
			startDate: new Date(),
			endDate: addDays(new Date(), 7),
			key: "selection",
		},
	]);

	//*get the target element to toggle
	const refOne = useRef(null);

	return (
		<div ref={refOne} className="calendarWrap">
			<DateRangePicker
				onChange={(item) => setRange([item.selection])}
				editableDateInputs={true}
				moveRangeOnFirstSelection={false}
				ranges={range}
				months={2}
				direction="horizontal"
				className="calendarElements"
				rangeColors={["#5616f5", "#7d28eb"]}
				locale={tr}
			/>
		</div>
	);
};

export default DateRangePickerComp;
