import PropTypes from 'prop-types';
import { useFetch } from '../../../hooks/index';
import { Img, ModalComponent } from '../../index';
import { Card, useDisclosure } from '@nextui-org/react';
import { useState } from 'react';
const BiographyCarrousel = ({ className }) => {
	const { data } = useFetch('src/data/ImgData.json');
	const imgDataCheck = data ? data.biography : [];
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [currentImg, setCurrentImg] = useState(null)

	const handleOpenModal = (key) => {
		setCurrentImg(key)
		onOpen()
	}

	return (
		<>
			<Card
				isPressable
				className={`grid w-full h-fit rounded-lg p-2 cursor-default ${className}`}
			>
				<header>
					<h2 className='font-secondary text-xl text-primary text-left cursor-default'>
						Photos
					</h2>
				</header>
				<main className='grid grid-cols-2 md:grid-cols-3 gap-4'>
					{imgDataCheck.map((item, index) => (
						<div key={index}>
							<Img
								img={item.img}
								className={`h-auto max-w-full rounded-lg cursor-pointer`}
								onClick={() => handleOpenModal(item.img)}
							/>
						</div>
					))}
					<ModalComponent
						isOpen={isOpen}
						onOpenChange={onOpenChange}
						img={currentImg}
					/>
				</main>
			</Card>
		</>
	);
};
BiographyCarrousel.propTypes = {
	className: PropTypes.string,
};
export default BiographyCarrousel;
