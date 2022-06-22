import React from "react"
import Link from "next/link"

const Header = () => {
	return (
		<header>
			<div className="max-w-screen-2xl px-4 2xl:px-0 mx-auto flex justify-between w-full py-[10px]">
				<button className="flex items-center px-[13px] py-[7.5px] border rounded-full border-gray-300">
					<LocationIcon />
					<span className="text-gray-500 text-base">Алматы</span>
				</button>
				<div className="flex items-center px-[13px] py-[7.5px] border rounded-full border-gray-300">
					<PhoneIcon />
					<span className="ml-3 mr-2 text-[13px]">Помощь и консультация</span>
					<ArrowRight />
				</div>
			</div>
			<div className="bg-[#029AAD] p-4">
				<nav className="max-w-screen-2xl px-4 2xl:px-0 flex items-center justify-between mx-auto ">
					<Logo />
					<div className="flex items-center justify-between bg-gray-50 w-[675px] rounded-lg pr-3">
						<input
							placeholder="Ищите среди 10 000 товаров..."
							className="border-none w-full h-12 pl-4 rounded-lg"
							type="text"
							name=""
							id=""
						/>
						<SearchIcon />
					</div>
					<div className="flex items-center space-x-4">
						<UserIcon />
						<WeightIcon />
						<HeartIcon />
						<CartIcon />
						<Link className="flex flex-col" href="/" passHref>
							<a>
								<b className="font-semibold text-white">Корзина</b>
								<span className="text-xs text-white">2 102 820₸</span>
							</a>
						</Link>
					</div>
				</nav>
			</div>
		</header>
	)
}

const LocationIcon = () => (
	<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M10.9723 13.3734C10.7578 13.3418 10.5574 13.5246 10.5293 13.7777C10.5047 14.0309 10.6594 14.2629 10.8773 14.291C12.5051 14.5195 13.1344 14.8957 13.282 15.0644C12.9937 15.4195 11.2852 15.9855 8.53594 15.9855C5.78672 15.9855 4.08164 15.416 3.78984 15.0644C3.9375 14.8992 4.56328 14.523 6.18047 14.2945C6.39844 14.2629 6.55312 14.0344 6.52851 13.7812C6.50039 13.5281 6.3 13.3488 6.08555 13.377C4.01836 13.6687 2.9707 14.2348 2.9707 15.0644C2.9707 16.8609 7.9664 16.9137 8.53594 16.9137C9.10547 16.9137 14.1012 16.8609 14.1012 15.0644C14.1047 14.2348 13.05 13.6652 10.9723 13.3734Z"
			fill="#FB791B"
		/>
		<path
			d="M13.1662 6.13472C13.1662 7.59722 12.1783 9.11948 12.1677 9.13354L8.53962 14.7726L4.90095 9.11597C4.8904 9.1019 3.91306 7.60425 3.91306 6.13823C3.91306 3.55425 5.98727 1.4519 8.53962 1.4519C11.092 1.4519 13.1662 3.55073 13.1662 6.13472Z"
			fill="#029AAD"
		/>
		<path
			d="M10.5961 6.02925C10.5961 7.17886 9.67498 8.11401 8.53943 8.11401C7.40388 8.11401 6.48279 7.17886 6.48279 6.02925C6.48279 4.87964 7.40388 3.948 8.53943 3.948C9.67498 3.948 10.5961 4.87964 10.5961 6.02925Z"
			fill="white"
		/>
	</svg>
)
const PhoneIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M20 15.9289V19.072C20.0001 19.297 19.9148 19.5138 19.7614 19.6784C19.608 19.843 19.3978 19.9434 19.1733 19.9591C18.7849 19.9858 18.4676 20 18.2222 20C10.3671 20 4 13.6329 4 5.77778C4 5.53244 4.01333 5.21511 4.04089 4.82667C4.05664 4.60217 4.15696 4.39201 4.3216 4.23859C4.48625 4.08516 4.70295 3.9999 4.928 4H8.07111C8.18137 3.99989 8.28773 4.04076 8.36954 4.11468C8.45134 4.18861 8.50275 4.2903 8.51378 4.4C8.53422 4.60444 8.55289 4.76711 8.57067 4.89067C8.74732 6.12349 9.10934 7.32252 9.64444 8.44711C9.72889 8.62489 9.67378 8.83733 9.51378 8.95111L7.59556 10.3218C8.7684 13.0546 10.9463 15.2325 13.6791 16.4053L15.048 14.4907C15.104 14.4124 15.1856 14.3563 15.2787 14.3321C15.3717 14.3079 15.4704 14.3172 15.5573 14.3582C16.6818 14.8923 17.8805 15.2534 19.1129 15.4293C19.2364 15.4471 19.3991 15.4667 19.6018 15.4862C19.7113 15.4975 19.8128 15.549 19.8865 15.6307C19.9603 15.7125 20.001 15.8188 20.0009 15.9289H20Z"
			fill="#029AAD"
		/>
	</svg>
)

const ArrowRight = () => (
	<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M9.82295 3.82283L5.99995 7.64633L2.17695 3.82283C2.13001 3.77588 2.06634 3.74951 1.99995 3.74951C1.93356 3.74951 1.86989 3.77588 1.82295 3.82283C1.77601 3.86977 1.74963 3.93344 1.74963 3.99983C1.74963 4.06622 1.77601 4.12988 1.82295 4.17683L5.82295 8.17683C5.84617 8.20011 5.87376 8.21858 5.90413 8.23118C5.93451 8.24379 5.96707 8.25027 5.99995 8.25027C6.03283 8.25027 6.06539 8.24379 6.09577 8.23118C6.12614 8.21858 6.15373 8.20011 6.17695 8.17683L10.1769 4.17683C10.2239 4.12988 10.2503 4.06622 10.2503 3.99983C10.2503 3.93344 10.2239 3.86977 10.1769 3.82283C10.13 3.77588 10.0663 3.74951 9.99995 3.74951C9.93356 3.74951 9.86989 3.77588 9.82295 3.82283Z"
			fill="black"
		/>
	</svg>
)

const Logo = () => (
	<svg width="200" height="36" viewBox="0 0 200 36" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g clipPath="url(#clip0_732_1124)">
			<path
				d="M29.7009 35.6143H5.0152C1.15806 35.6143 -0.513373 34.4571 0.000912338 30.3429L3.72948 5.4C3.85806 3.98571 4.50091 2.7 5.52948 1.67143C6.94377 0.642857 8.6152 0.128571 10.2866 0.257143H34.3295L31.2438 5.52857H13.2438C11.5723 5.52857 10.6723 6.04286 10.4152 7.71429L9.64377 13.2429L9.38663 14.7857H28.9295L25.7152 20.0571H8.74377L7.58663 28.1571C7.45806 28.6714 7.58663 29.1857 7.84377 29.7C8.6152 30.0857 9.38663 30.2143 10.2866 30.0857H32.9152L29.7009 35.6143ZM75.4723 0.385714L57.0866 32.1429C55.8009 34.5857 53.2295 36.1286 50.4009 36C47.4438 36 45.6438 34.7143 44.8723 32.1429L35.8723 0.385714H43.5866L50.6581 28.8C51.0438 29.9571 51.8152 29.7 52.3295 28.8L67.7581 0.385714H75.4723ZM81.0009 22.7571L79.0723 35.6143H71.8723L76.2438 6.42857C76.8866 2.31429 79.0723 0.385714 83.1866 0.385714H101.187C108.901 0.385714 110.572 4.5 109.544 11.3143C108.644 17.4857 106.201 22.8857 99.1295 22.8857H94.2438V23.1429L106.844 35.6143H97.8438L87.0438 24.1714C85.5009 22.5 84.2152 22.7571 81.0009 22.7571ZM81.6438 18C86.5295 18 91.5438 18 96.4295 18C97.9724 18.1286 99.5152 17.6143 100.544 16.4571C101.444 15.0429 101.958 13.3714 102.087 11.5714C102.472 9.12857 102.215 7.58571 101.444 6.68571C100.287 5.78571 99.0009 5.4 97.5866 5.65714H86.0152C84.4724 5.52857 83.1866 6.55714 83.0581 8.1V8.22857L81.6438 18ZM118.672 35.6143L122.529 9.51429L114.558 15.3L111.601 35.4857L118.672 35.6143ZM132.429 35.6143H125.229L130.372 0.385714H137.572L135.644 13.7571C135.772 13.6286 135.901 13.6286 135.901 13.5L152.229 0.385714H161.101L142.587 14.7857C141.558 15.4286 140.787 16.3286 140.401 17.3571C140.272 18.3857 140.787 19.4143 142.072 20.7L157.758 35.4857H148.758L135.129 21.9857C134.872 21.7286 134.615 21.4714 134.487 21.2143L132.429 35.6143ZM199.287 35.6143H191.829L189.258 26.7429H171.001L165.858 35.6143H158.272L177.172 3.98571C178.972 1.02857 180.515 0 183.987 0C187.072 0 188.615 0.9 189.644 3.98571L199.287 35.6143ZM188.101 21.9857L183.987 7.71429C183.73 6.68571 183.344 6.3 183.087 6.3C182.444 6.55714 182.058 7.07143 181.801 7.71429L173.444 21.9857H188.101Z"
				fill="white"
			/>
			<path d="M122.786 5.91431L114.814 11.5715L116.486 0.385742H123.686L122.786 5.91431Z" fill="#FB791B" />
		</g>
		<defs>
			<clipPath id="clip0_732_1124">
				<rect width="200" height="36" fill="white" />
			</clipPath>
		</defs>
	</svg>
)
const SearchIcon = () => (
	<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M21.9529 20.293L17.4139 15.754C18.7608 14.0464 19.4043 11.8888 19.2129 9.72241C19.0214 7.55604 18.0094 5.5447 16.3839 4.09984C14.7585 2.65499 12.6423 1.88584 10.4685 1.94973C8.29459 2.01362 6.22728 2.90573 4.68946 4.44355C3.15164 5.98137 2.25953 8.04868 2.19564 10.2225C2.13175 12.3964 2.9009 14.5125 4.34576 16.138C5.79061 17.7635 7.80195 18.7755 9.96832 18.9669C12.1347 19.1584 14.2923 18.5148 15.9999 17.168L20.5389 21.707L21.9529 20.293ZM10.7459 17C9.46029 17 8.20358 16.6187 7.13466 15.9045C6.06574 15.1903 5.23262 14.1751 4.74065 12.9874C4.24868 11.7997 4.11996 10.4927 4.37076 9.23187C4.62156 7.97099 5.24063 6.8128 6.14967 5.90376C7.05871 4.99472 8.2169 4.37565 9.47778 4.12485C10.7387 3.87405 12.0456 4.00277 13.2333 4.49474C14.421 4.98671 15.4362 5.81983 16.1504 6.88875C16.8646 7.95767 17.2459 9.21438 17.2459 10.5C17.2437 12.2232 16.5582 13.8753 15.3397 15.0938C14.1212 16.3123 12.4691 16.9978 10.7459 17Z"
			fill="black"
		/>
	</svg>
)

const UserIcon = ({ className }: { className?: string }) => (
	<svg className={className} width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g clipPath="url(#clip0_732_1146)">
			<path
				d="M21.4124 26.1905H18.9181V23.6962C18.9181 22.7038 18.5238 21.7521 17.8222 21.0505C17.1205 20.3488 16.1688 19.9546 15.1766 19.9546H7.6936C6.70133 19.9546 5.74967 20.3488 5.048 21.0505C4.34634 21.7521 3.95205 22.7038 3.95205 23.6962V26.1905H1.45776V23.6962C1.45776 22.0423 2.11475 20.4562 3.28419 19.2868C4.4536 18.1173 6.03979 17.4604 7.6936 17.4604H15.1766C16.8304 17.4604 18.4166 18.1173 19.586 19.2868C20.7554 20.4562 21.4124 22.0423 21.4124 23.6962V26.1905ZM11.4351 14.966C10.4524 14.966 9.47931 14.7724 8.57145 14.3964C7.6636 14.0204 6.83872 13.4692 6.14384 12.7743C5.44895 12.0794 4.89776 11.2545 4.52169 10.3467C4.14562 9.43869 3.95205 8.46571 3.95205 7.48298C3.95205 6.50036 4.14562 5.52725 4.52169 4.61938C4.89776 3.7115 5.44895 2.88658 6.14384 2.19171C6.83872 1.49686 7.6636 0.945666 8.57145 0.569607C9.47931 0.193547 10.4524 0 11.4351 0C13.4197 0 15.323 0.788381 16.7263 2.19171C18.1297 3.59505 18.9181 5.49838 18.9181 7.48298C18.9181 9.46762 18.1297 11.371 16.7263 12.7743C15.323 14.1776 13.4197 14.966 11.4351 14.966ZM11.4351 12.4717C12.7581 12.4717 14.0271 11.9461 14.9626 11.0105C15.8981 10.075 16.4237 8.80607 16.4237 7.48298C16.4237 6.15988 15.8981 4.89104 14.9626 3.95548C14.0271 3.01992 12.7581 2.49433 11.4351 2.49433C10.1121 2.49433 8.84312 3.01992 7.90753 3.95548C6.97205 4.89104 6.44645 6.15988 6.44645 7.48298C6.44645 8.80607 6.97205 10.075 7.90753 11.0105C8.84312 11.9461 10.1121 12.4717 11.4351 12.4717Z"
				fill="white"
			/>
		</g>
		<defs>
			<clipPath id="clip0_732_1146">
				<rect width="21.4286" height="25" fill="white" transform="translate(0.725342)" />
			</clipPath>
		</defs>
	</svg>
)

const WeightIcon = ({ className }: { className?: string }) => (
	<svg className={className} width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M11.8336 17.8947C11.4569 20.8553 9.35326 23.0263 6.90432 23.0263C4.45534 23.0263 2.35173 20.8553 1.97497 17.8947H11.8336ZM2.7285 15.9211L6.90432 9.27635L11.0802 15.9211H2.7285ZM13.5919 16.6118C13.5606 16.5461 13.4978 16.3815 13.4978 16.3487L7.62646 7.00654C7.46947 6.74346 7.1869 6.57895 6.90432 6.57895C6.62175 6.57895 6.33917 6.74346 6.18219 7.00654L0.310921 16.3487C0.279517 16.3815 0.216729 16.5461 0.216729 16.6118C0.185325 16.6776 0.153931 16.875 0.153931 16.9079C0.153931 21.3815 3.16806 25 6.90432 25C10.6406 25 13.6547 21.3815 13.6547 16.9079C13.6547 16.875 13.6234 16.6776 13.5919 16.6118ZM27.179 17.8947C26.8023 20.8553 24.6986 23.0263 22.2497 23.0263C19.8008 23.0263 17.6971 20.8224 17.3204 17.8947H27.179ZM18.0738 15.9211L22.2497 9.27635L26.4255 15.9211H18.0738ZM28.9373 16.6118C28.9059 16.5461 28.8431 16.3815 28.8431 16.3487L22.9718 7.00654C22.8148 6.74346 22.5323 6.57895 22.2497 6.57895C21.9671 6.57895 21.6845 6.74346 21.5276 7.00654L15.6562 16.3487C15.6249 16.4474 15.5934 16.5132 15.5621 16.6118C15.5307 16.6776 15.4993 16.875 15.4993 16.9079C15.4993 21.3815 18.5135 25 22.2497 25C25.986 25 29.0001 21.3815 29.0001 16.9079C29.0001 16.875 28.9686 16.6776 28.9373 16.6118ZM24.1532 2.07237H17.4028C16.9946 0.822365 15.9271 0 14.734 0C13.5409 0 12.4734 0.822365 12.0338 2.07237H5.59741C5.09507 2.07237 4.7183 2.5 4.7183 3.05921C4.7183 3.58553 5.12646 4.04605 5.59741 4.04605H11.9396C12.285 5.46053 13.4153 6.44737 14.734 6.44737C16.0527 6.44737 17.183 5.46053 17.5284 4.04605H24.1532C24.6555 4.04605 25.0323 3.61842 25.0323 3.05921C25.0323 2.5 24.6241 2.07237 24.1532 2.07237Z"
			fill="white"
		/>
	</svg>
)

const HeartIcon = ({ className }: { className?: string }) => (
	<svg className={className} width="35" height="51" viewBox="0 0 35 51" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g clipPath="url(#clip0_732_1149)">
			<path
				d="M12.3626 16.0121C15.2662 13.4179 19.7533 13.504 22.5507 16.2925C25.3469 19.0822 25.4433 23.5251 22.8424 26.423L12.3601 36.8686L1.88021 26.423C-0.720594 23.5251 -0.622939 19.0748 2.17195 16.2925C4.97178 13.5077 9.45026 13.4142 12.3626 16.0121ZM20.8004 18.0305C18.9462 16.183 15.9548 16.108 14.014 17.8423L12.3638 19.3159L10.7123 17.8436C8.76545 16.1068 5.7802 16.183 3.92107 18.033C2.07924 19.8657 1.98653 22.7994 3.68373 24.7379L12.3613 33.3863L21.039 24.7391C22.7374 22.7994 22.6446 19.8694 20.8004 18.0305Z"
				fill="white"
			/>
		</g>
		<rect x="14.0001" y="4" width="21" height="22" rx="10.5" fill="#FB791B" />
		<path d="M24.1451 19V12.708L22.6601 13.621V11.971L24.1451 11.08H25.6741V19H24.1451Z" fill="white" />
		<defs>
			<clipPath id="clip0_732_1149">
				<rect width="24.723" height="51" fill="white" />
			</clipPath>
		</defs>
	</svg>
)

const CartIcon = ({ className }: { className?: string }) => (
	<svg className={className} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M3.87942 5.48063L6.10352e-05 1.66525L1.69272 0L5.57088 3.81655H23.8038C23.9902 3.81654 24.1741 3.85941 24.3407 3.94173C24.5074 4.02406 24.6521 4.14356 24.7634 4.2907C24.8748 4.43785 24.9496 4.60856 24.982 4.78921C25.0143 4.96986 25.0033 5.15545 24.9498 5.33117L22.0788 14.746C22.005 14.9886 21.8536 15.2012 21.6471 15.3524C21.4407 15.5035 21.1902 15.5852 20.9328 15.5851H6.27186V17.9389H19.4304V20.2926H5.07564C4.75839 20.2926 4.45412 20.1686 4.22979 19.9479C4.00545 19.7272 3.87942 19.4278 3.87942 19.1157V5.48063ZM6.27186 6.1703V13.2314H20.0429L22.1961 6.1703H6.27186ZM5.67376 25C5.19787 25 4.74147 24.814 4.40497 24.483C4.06846 24.1519 3.87942 23.7029 3.87942 23.2347C3.87942 22.7665 4.06846 22.3175 4.40497 21.9865C4.74147 21.6554 5.19787 21.4694 5.67376 21.4694C6.14966 21.4694 6.60606 21.6554 6.94256 21.9865C7.27906 22.3175 7.46806 22.7665 7.46806 23.2347C7.46806 23.7029 7.27906 24.1519 6.94256 24.483C6.60606 24.814 6.14966 25 5.67376 25ZM20.0285 25C19.5526 25 19.0962 24.814 18.7597 24.483C18.4232 24.1519 18.2342 23.7029 18.2342 23.2347C18.2342 22.7665 18.4232 22.3175 18.7597 21.9865C19.0962 21.6554 19.5526 21.4694 20.0285 21.4694C20.5044 21.4694 20.9608 21.6554 21.2973 21.9865C21.6338 22.3175 21.8228 22.7665 21.8228 23.2347C21.8228 23.7029 21.6338 24.1519 21.2973 24.483C20.9608 24.814 20.5044 25 20.0285 25Z"
			fill="white"
		/>
	</svg>
)

export default Header