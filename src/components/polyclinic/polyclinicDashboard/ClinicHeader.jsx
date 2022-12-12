import React from "react";

const ClinicHeader = () => {
	return (
		<div className="flex flex-row mt-16 gap-20 py-5">
			{/* clinic header infos */}
			<div className="flex basis-4/6 justify-start items-center px-10 py-4">
				<img
					width={100}
					src="https://ozeldent42.com/tema/genel/uploads/hizmetler/icon/implant.png"
					alt="İnciDis"
				/>
				<div className="text-2xl text-Sky-700 ml-8">
					<h1 className="font-bold" style={{ fontSize: "2rem" }}>
						İNCİ DİŞ
					</h1>
					<h2>POLİKLİNİĞİ</h2>
				</div>
			</div>
			<div className="basis-2/12">
				<h3>Adress</h3>
				<p>Cumhuriyet Mahallesi Sağlık Caddesi Kat:2 No:5 FATİH/İSTANBUL</p>
			</div>
			<div className="basis-2/12">
				<h3>Telefon</h3>
				<p>+90 222 222 22 22</p>
				<p>+90 222 222 22 22</p>
				<p>+90 222 222 22 22</p>
			</div>
		</div>
	);
};

export default ClinicHeader;
