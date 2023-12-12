import { Card } from '@nextui-org/react';
import { AccordionComponent, Img } from '../../index';
import PropTypes from 'prop-types';

const BiographyEdgar = ({ className }) => {
	return (
		<>
			<Card
				className={`grid w-full xl:max-h-80 h-fit rounded-lg p-2 col-span-2 ${className}`}
			>
				<header>
					<h2 className='font-secondary text-xl text-primary'>
						Edgar Mendez - Front-End Developer
					</h2>
				</header>
				<main className='grid content-center grid-cols-1 md:grid-cols-3'>
					<div className='grid justify-center items-center'>
						<Img className={'rounded-full max-h-44 max-w-44'} img={'Edgar'} />
					</div>
					<div className='col-span-2'>
						<AccordionComponent
							title={'My Beginning'}
							text={`Born and raised in Cancún, México.
                            My journey began as a student of industrial engineering and a waiter's assistant in a hotel chain. Eventually, my positive aptitudes allowed me to stand out; however, due to pandemic circumstances, I was negatively impacted, and my engineering career became unsustainable, leading to a challenging phase in my personal and professional life, which prompted me to change careers.`}
							title2={'Now!'}
							text2={`Currently, I am dedicated to studying programming and web development as a professional career  in the Front-End area, specializing in the JavaScript ecosystem. I have delivered relevant personal projects in the sector, and my perseverance and eagerness to learn have given me this opportunity to work as a developer.

                            I am proud and happy with the change, especially excited about new opportunities and how much effort I have put into it.`}
							title3={'Hobbies'}
							text3={'Cooking and watching series or movies'}
						/>
					</div>
				</main>
			</Card>
		</>
	);
};
BiographyEdgar.propTypes = {
	className: PropTypes.string,
};
export default BiographyEdgar;
