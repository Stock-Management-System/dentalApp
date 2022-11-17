import React from "react";
import { useSelector } from "react-redux";
import Container from "../../../components/polyclinic/Container";
import Layout from "../../../components/polyclinic/Layout";
import MiddleLink from "../../../components/polyclinic/MiddleLink";
import "./polyclinicProfile.scss";

const PolyclinicProfile = () => {
	const open = useSelector((state) => state.open.value);
	return (
		<>
			<Layout />
			<MiddleLink />
		</>
	);
};

export default PolyclinicProfile;
