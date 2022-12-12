import React, { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
import sinus1 from "../../../assets/sinus1.png";
import sinus2 from "../../../assets/sinus2.png";
import sinus3 from "../../../assets/sinus3.png";
import sinus4 from "../../../assets/sinus4.png";

const DoctorIstatistik = ({ istatistik }) => {
	const [veriTime, setVeriTime] = useState(
		istatistik.istatistikVeri[4].zamanAdı
	);
	const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
	const [veriSayı, setVeriSayı] = useState(istatistik.istatistikVeri[4].sayı);

	const bgColor =
		istatistik.id === 1
			? "text-blue1"
			: istatistik.id === 2
			? "text-turquaz"
			: istatistik.id === 3
			? "text-pink"
			: "text-black";

	const imgSinus =
		istatistik.id === 1
			? sinus1
			: istatistik.id === 2
			? sinus2
			: istatistik.id === 3
			? sinus3
			: sinus4;

	const handleClick = () => {
		setDropdownIsOpen(!dropdownIsOpen);
	};

	const handledrop = (e) => {
		setDropdownIsOpen(!dropdownIsOpen);
		setVeriSayı(e.sayı);
		setVeriTime(e.zamanAdı);
	};
	return (
		<div className="w-1/4 bg-container p-2">
			<div className="flex flex-row p-2 justify-between py-2">
				<div>
					<h6 className="font-bold text-xl">{istatistik.istatistikAdi}</h6>
					<h1 className={`text-5xl font-bold ${bgColor} `}>{veriSayı}</h1>
					<p className="text-base opacity-70">{veriTime.toUpperCase()}</p>
				</div>
				<div tabIndex={0} className="dropdown dropdown-end">
					<label
						className="p-1 bg-white swap rounded-full  "
						onClick={handleClick}
					>
						{dropdownIsOpen ? (
							<div>
								{" "}
								<HiMinus />
							</div>
						) : (
							<div>
								<HiPlus />
							</div>
						)}
					</label>
					<ul
						tabIndex={0}
						className={`menu p-2 shadow bg-base-100 right-0 rounded-box w-52 absolute transition-all ${
							!dropdownIsOpen && "invisible"
						}`}
					>
						{istatistik.istatistikVeri.map((e) => (
							<li onClick={() => handledrop(e)}>
								<p>{e.zamanAdı}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="py-2 flex justify-center">
				<img src={imgSinus} alt="sinus" />
			</div>
		</div>
	);
};

export default DoctorIstatistik;
