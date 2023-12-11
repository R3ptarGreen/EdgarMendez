import { Modal, ModalContent, ModalBody } from '@nextui-org/react';
import { Img } from '../../index';
import PropTypes from 'prop-types'

const ModalComponent = ({isOpen,onOpenChange, img}) => {
	return (
		<div>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				classNames={{
					body: 'py-6',
					backdrop: 'bg-[#231F20]/60 backdrop-opacity-40',
					base: 'border-[#231F20] bg-[#231F20]',
				}}
			>
				<ModalContent>
					<>
						<ModalBody>
							<Img img={img} className={'w-full h-fit'} />
						</ModalBody>
					</>
				</ModalContent>
			</Modal>
		</div>
	);
};
ModalComponent.propTypes = {
    isOpen: PropTypes.bool,
    onOpenChange: PropTypes.func,
    img: PropTypes.string
}
export default ModalComponent;
