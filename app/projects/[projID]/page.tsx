import React from "react"

type PageProps = {
	params: { projID: string }
}

export default function page({ params: { projID } }: PageProps) {
	return (
		<div>
			<div className='py-20'>Project {projID}</div>
		</div>
	)
}
