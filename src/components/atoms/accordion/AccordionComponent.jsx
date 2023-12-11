import {Accordion, AccordionItem} from '@nextui-org/react'
import PropTypes from 'prop-types'
const AccordionComponent = ({title, title2, text, text2, text3, title3}) => {
  return (
    <>
        <Accordion className=''
							motionProps={{
								variants: {
									enter: {
										y: 0,
										opacity: 1,
										height: 'auto',
										transition: {
											height: {
												type: 'spring',
												stiffness: 500,
												damping: 30,
												duration: 1,
											},
											opacity: {
												easings: 'ease',
												duration: 1,
											},
										},
									},
									exit: {
										y: -10,
										opacity: 0,
										height: 0,
										transition: {
											height: {
												easings: 'ease',
												duration: 0.25,
											},
											opacity: {
												easings: 'ease',
												duration: 0.3,
											},
										},
									},
								},
							}}
						>
							<AccordionItem
								
								key='1'
								title={title}
							>{text}</AccordionItem>
							<AccordionItem
								key='2'
								title={title2}
							>{text2}</AccordionItem>
							<AccordionItem
								key='3'
								title={title3}
							>{text3}</AccordionItem>
						</Accordion>
    </>
  )
}
AccordionComponent.propTypes = {
	title: PropTypes.string,
	title2: PropTypes.string,
	text: PropTypes.string,
	text2: PropTypes.string,
	title3: PropTypes.string,
	text3: PropTypes.string

}
export default AccordionComponent