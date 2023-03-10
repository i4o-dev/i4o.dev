import {
	ArrowRightIcon,
	GitHubLogoIcon,
	TwitterLogoIcon,
} from '@radix-ui/react-icons'

function Socials() {
	return (
		<div className='flex cursor-pointer items-center justify-center rounded-md border border-zinc-100 bg-transparent p-4 transition-all duration-300 dark:border-zinc-700/40'>
			<div className='flex h-full w-full flex-col items-start justify-start px-4 py-2'>
				<h3 className='m-0 mb-6 text-base'>Socials</h3>
				<div className='flex w-full flex-col items-start gap-6'>
					<a
						className='transition-color flex items-center justify-between gap-2 no-underline duration-200'
						href='https://twitter.com/i4o_dev'
						target='_blank'
						rel='noreferrer noopener'
					>
						<span className='inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 hover:dark:text-zinc-500'>
							<TwitterLogoIcon className='h-5 w-5' />
							Follow me on Twitter
						</span>
						<ArrowRightIcon className='text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 hover:dark:text-zinc-500' />
					</a>
					<a
						className='transition-color flex items-center justify-between gap-2 no-underline duration-200'
						href='https://github.com/i4o-dev'
						target='_blank'
						rel='noreferrer noopener'
					>
						<span className='inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 hover:dark:text-zinc-500'>
							<GitHubLogoIcon className='h-5 w-5' />
							Check out my Github profile
						</span>
						<ArrowRightIcon className='text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 hover:dark:text-zinc-500' />
					</a>
					<a
						className='transition-color flex items-center justify-between gap-2 no-underline duration-200'
						href='https://poly.work/ilango'
						target='_blank'
						rel='noreferrer noopener'
					>
						<span className='inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 hover:dark:text-zinc-500'>
							<svg
								className='h-4 w-4'
								role='img'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								stroke='currentColor'
							>
								<path d='M19.125 0H4.875A4.865 4.865 0 0 0 0 4.875v14.25C0 21.825 2.175 24 4.875 24h6.6c2.7 0 4.875-2.175 4.875-4.875V16.65h2.775c2.7 0 4.875-2.175 4.875-4.875v-6.9C24 2.175 21.825 0 19.125 0zM16.5 1.275h2.625a3.6 3.6 0 0 1 3.6 3.6v2.7H16.5v-6.3zM15.075 9v6.45H8.85V9h6.225zM8.85 1.2h6.225v6.375H8.85V1.2zM1.275 4.8a3.6 3.6 0 0 1 3.6-3.6H7.5v6.375H1.275V4.8zM7.5 9v6.45H1.2V9h6.3zm0 13.725H4.8a3.6 3.6 0 0 1-3.6-3.6V16.8h6.3v5.925zm7.575-3.525a3.6 3.6 0 0 1-3.6 3.6H8.85v-5.925h6.225V19.2zm7.65-7.35a3.6 3.6 0 0 1-3.6 3.6H16.5V9h6.225v2.85z' />
							</svg>
							View my Polywork timeline
						</span>
						<ArrowRightIcon className='text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 hover:dark:text-zinc-500' />
					</a>
					<a
						className='transition-color flex items-center justify-between gap-2 no-underline duration-200'
						href='https://ilango.substack.com/'
						target='_blank'
						rel='noreferrer noopener'
					>
						<span className='inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 hover:dark:text-zinc-500'>
							<svg
								className='h-4 w-4'
								role='img'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								stroke='currentColor'
							>
								<path d='M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z' />
							</svg>
							Subscribe to my Substack
						</span>
						<ArrowRightIcon className='text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 hover:dark:text-zinc-500' />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Socials
