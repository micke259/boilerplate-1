import React from 'react'
import cls from './main.module.scss'


export const Main = () => {
  return (
	<main className={cls.main}>
		<section className={cls.top}>
			<div className={cls.container}>
				<div className={cls.top__inner}>
					<h1 className={cls.top__title}>
						A cup of tea is a moment of calm in the chaos of life
					</h1>
					<p className={cls.top__text}>
						Wide selection of high-quality teas from all over the world, carefully curated by tea experts.
					</p>
				</div>
			</div>
		</section>
		<blockquote className={cls.blockquote}>
			<p className={cls.blockquote__text}>
				"Tea is not just a drink, it's a way of life and a way to connect with our loved ones."
			</p>
		</blockquote>
	</main>
  )
}
