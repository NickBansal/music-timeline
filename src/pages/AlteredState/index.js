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
	animation: zoom-in 1s 1;

	@media (min-width: ${breakPoints.mobileMax}) {
		font-size: 30px;
	}

	@keyframes zoom-in {
		0% {
			opacity: 0;
			transform: scale(0);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
	}
`;

const MinusIcon = styled.i`
	font-size: 25px;
	cursor: pointer;
	animation: zoom-in 1s 1;

	@media (min-width: ${breakPoints.mobileMax}) {
		font-size: 30px;
	}

	@keyframes zoom-out {
		0% {
			opacity: 1;
			transform: scale(1);
		}
		100% {
			opacity: 0;
			transform: scale(0);
		}
	}
`;

const AlteredState = () => {
	const [era, setEra] = useState(null);
	const eraLabels = ['1960', '1970', '1980', '1990', '2000'];

	return (
		<Container>
			{eraLabels.map((year, index) => {
				return (
					<TimePeriod key={year}>
						<Era>{year}&apos;s</Era>
						{era === index ? (
							<MinusIcon
								className="fa-2x fas fa-minus"
								onClick={() => setEra(null)}
							/>
						) : (
							<PlusIcon
								className="fa-2x fas fa-plus"
								onClick={() => setEra(index)}
							/>
						)}
					</TimePeriod>
				);
			})}
		</Container>
	);
};

export default AlteredState;
