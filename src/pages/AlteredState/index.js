import React, { useState } from 'react';
import styled from 'styled-components';
import breakPoints from '../../utils/styleConstants';

const Container = styled.div`
	color: white;
	width: 90%;
	margin: 20px auto;
	max-width: 1000px;
`;

const TimePeriod = styled.div`
	border-bottom: 1px solid white;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;

	&:last-of-type {
		border-bottom: none;
	}

	@media (min-width: ${breakPoints.mobileMax}) {
		height: 70px;
	}
`;

const Era = styled.p`
	font-size: 20px;
	@media (min-width: ${breakPoints.mobileMax}) {
		font-size: 30px;
	}
`;

const PlusIcon = styled.i`
	font-size: 25px;
	cursor: pointer;
	@media (min-width: ${breakPoints.mobileMax}) {
		font-size: 30px;
	}
`;

const AlteredState = () => {
	const [era, setEra] = useState(null);
	const eraLabels = ['1960', '1970', '1980', '1990', '2000'];

	return (
		<Container>
			{eraLabels.map((year, index) => {
				const symbol = era === index ? 'minus' : 'plus';
				return (
					<TimePeriod key={year}>
						<Era>{year}</Era>
						<PlusIcon
							className={`fa-2x fas fa-${symbol}`}
							onClick={() => setEra(index)}
						/>
					</TimePeriod>
				);
			})}
		</Container>
	);
};

export default AlteredState;
