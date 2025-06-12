<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="saya">
	<div class="avatar_akun">
		<img src="/avatar.png" alt="foto akun" width="70" height="70" />
	</div>
	<div class=" nama_akun">Tofik Hidayat</div>
	<div class="voucher_poin">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="20px"
			viewBox="0 -960 960 960"
			width="20px"
			fill="var(--md-sys-color-tertiary)"
			><path
				d="M843-399 562-117q-11 11-24 16t-27 5q-14 0-27-5t-24-16L116.7-460.3Q106-471 101-483.89T96-511v-281q0-29.7 21.15-50.85Q138.3-864 168-864h281q13.91 0 26.96 5 13.04 5 23.77 15.7L843-500q11 11 16 23.5t5 26.5q0 14-5.02 27.09Q853.96-409.83 843-399ZM264-636q25 0 42.5-17.5T324-696q0-25-17.5-42.5T264-756q-25 0-42.5 17.5T204-696q0 25 17.5 42.5T264-636Zm272 341 111-111q10-10 15-22.96 5-12.97 5-27.66Q667-486 647.39-507q-19.61-21-47.39-21-20.36 0-40.18 12T511-473q-31.87-32.08-49.94-43.54Q443-528 423-528q-28.61 0-48.8 20.78Q354-486.44 354-457q0 14 5.69 27.54Q365.38-415.93 375-406l111 111q10.64 11 24.82 11T536-295Z"
			/></svg
		>
		&nbsp;5 Voucher &nbsp; &nbsp;
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="20px"
			viewBox="0 -960 960 960"
			width="20px"
			fill="var(--md-sys-color-primary-point)"
			><path
				d="M480-96q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm-1-120q14 0 24-9t10-23v-15q49-8 80.5-42t31.5-80q0-45-29-78t-83-52q-57-20-78-36t-21-41q0-20 18-33t47-13q19 0 34 6t25 17q10 12 22.5 16t23.5-1q13-6 17.5-18t-2.5-23q-15-23-37.5-37T513-697v-15q0-14-9.5-23t-23.5-9q-14 0-23.5 9t-9.5 23v15q-45 11-72 40t-27 66q0 43 29 74t98 57q50 19 68 35.5t18 39.5q0 26-21 44t-52 18q-26 0-47.5-13T407-372q-7-12-19.5-17t-24.5 0q-14 5-19 18t1 25q16 31 42.5 52.5T446-264v16q0 14 9.5 23t23.5 9Z"
			/></svg
		>&nbsp;1.500 Point
	</div>
	<div class="detail_akun">
		<a
			class="akun"
			href="/saya/alamat"
			aria-current={page.url.pathname === '/saya/alamat'}
			aria-label="alamat saya"
		>
			<div class="icon_akun">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
					><path
						d="m574-129-214-75-186 72q-10 4-19.5 2.5T137-136q-8-5-12.5-13.5T120-169v-561q0-13 7.5-23t20.5-15l186-63q6-2 12.5-3t13.5-1q7 0 13.5 1t12.5 3l214 75 186-72q10-4 19.5-2.5T823-824q8 5 12.5 13.5T840-791v561q0 13-7.5 23T812-192l-186 63q-6 2-12.5 3t-13.5 1q-7 0-13.5-1t-12.5-3Zm-14-89v-468l-160-56v468l160 56Z"
					/></svg
				>
				<div class="isi_link">Alamat</div>
			</div>

			<div class="icon_link">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="#1f1f1f"
					><path
						d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"
					/></svg
				>
			</div>
		</a>

		<hr />
		<a
			class="akun"
			href="/saya/pengembalian"
			aria-current={page.url.pathname === '/saya/pengembalian'}
			aria-label="pengembalian dana"
		>
			<div class="icon_akun">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="#1f1f1f"
					><path
						d="M240-478q0 16 2 31.5t7 30.5q5 17-1 32.5T227-361q-16 8-31.5 1.5T175-383q-8-23-11.5-47t-3.5-48q0-134 93-228t227-94h7l-36-36q-11-11-11-28t11-28q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L507-628q-11 11-28 11t-28-11q-11-11-11-28t11-28l36-36h-7q-100 0-170 70.5T240-478Zm480-4q0-16-2-31.5t-7-30.5q-5-17 1-32.5t21-22.5q16-8 31.5-1.5T785-577q8 23 11.5 47t3.5 48q0 134-93 228t-227 94h-7l36 36q11 11 11 28t-11 28q-11 11-28 11t-28-11L349-172q-12-12-12-28t12-28l104-104q11-11 28-11t28 11q11 11 11 28t-11 28l-36 36h7q100 0 170-70.5T720-482Z"
					/></svg
				>
				<div class="isi_link">Metode Pengembalian Dana</div>
			</div>

			<div class="icon_link">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="#1f1f1f"
					><path
						d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"
					/></svg
				>
			</div>
		</a>
		<hr />
		<a
			class="akun"
			href="/saya/blog"
			aria-current={page.url.pathname === '/saya/blog'}
			aria-label="blog"
		>
			<div class="icon_akun">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="#1f1f1f"
					><path
						d="M480-178q-11 0-21.5-3t-19.5-8q-41-25-86-38t-93-13q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740v484q51-32 107-48t113-16q36 0 70.5 6t69.5 18v-480q15 5 29.5 10.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-48 0-93 13t-86 38q-9 5-19.5 8t-21.5 3Zm113-212q-10 9-21.5 3.5T560-405v-327q0-4 1.5-7.5t4.5-6.5l160-160q10-10 22-5t12 19v343q0 5-2 8.5t-5 6.5L593-390Z"
					/></svg
				>
				<div class="isi_link">Blog</div>
			</div>

			<div class="icon_link">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="#1f1f1f"
					><path
						d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"
					/></svg
				>
			</div>
		</a>
		<hr />
		<a
			class="akun"
			href="/saya/kebijakan"
			aria-current={page.url.pathname === '/saya/kebijakan'}
			aria-label="kebijakan"
		>
			<div class="icon_akun">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
					><path
						d="M480-84q-7 0-13-1t-12-3q-135-45-215-166.5T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 63-16.5 122.5T736-280L618-398q11-19 16.5-39.5T640-480q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47q21 0 41.5-5.5T560-342l129 128q-38 45-83.5 76.5T505-88q-6 2-12 3t-13 1Zm0-316q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Z"
					/></svg
				>
				<div class="isi_link">Kebijakan dan Privasi</div>
			</div>

			<div class="icon_link">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
					><path
						d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"
					/></svg
				>
			</div>
		</a>
		<hr />
		<a
			class="akun"
			href="/saya/syarat"
			aria-current={page.url.pathname === '/saya/syarat'}
			aria-label="syarat dan ketentuan"
		>
			<div class="icon_akun">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
					><path
						d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm120-160h200q17 0 28.5-11.5T560-320q0-17-11.5-28.5T520-360H320q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160h320q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520H320q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160h320q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680H320q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm160-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790Z"
					/></svg
				>
				<div class="isi_link">Syarat dan Ketentuan</div>
			</div>

			<div class="icon_link">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
					><path
						d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"
					/></svg
				>
			</div>
		</a>
		<hr />
		<a
			class="akun"
			href="/saya/bantuan"
			aria-current={page.url.pathname === '/saya/bantuan'}
			aria-label="bantuan"
		>
			<div class="icon_akun">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
					><path
						d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm2 160q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm4-572q25 0 43.5 16t18.5 40q0 22-13.5 39T502-525q-23 20-40.5 44T444-427q0 14 10.5 23.5T479-394q15 0 25.5-10t13.5-25q4-21 18-37.5t30-31.5q23-22 39.5-48t16.5-58q0-51-41.5-83.5T484-720q-38 0-72.5 16T359-655q-7 12-4.5 25.5T368-609q14 8 29 5t25-17q11-15 27.5-23t34.5-8Z"
					/></svg
				>
				<div class="isi_link">Bantuan</div>
			</div>

			<div class="icon_link">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
					><path
						d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"
					/></svg
				>
			</div>
		</a>
		<hr />
	</div>
</div>

<style>
	a {
		cursor: default;
		text-decoration: none;
	}
	.isi_link {
		color: var(--md-sys-color-on-background);
	}
	.icon_link > svg {
		fill: var(--md-sys-color-primary);
	}
	.icon_akun > svg {
		fill: var(--md-sys-color-primary);
	}
	.isi_link {
		margin-left: 12px;
	}
	.akun {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.icon_akun {
		display: flex;
		align-items: center;
	}
	.detail_akun {
		font-size: 12px;
		margin-top: 15px;
		margin-left: 15px;
		margin-right: 15px;
		padding-top: 25px;
		padding-bottom: 25px;
	}
	.avatar_akun {
		height: 70px;
		width: 70px;
		border-radius: 50%;
		background-color: var(--md-sys-color-tertiary-container);
		margin: auto;
	}
	.avatar_akun img {
		width: 60;
		height: 60;
		border-radius: 50px;
	}
	.nama_akun {
		text-align: center;
		font-size: 12px;
		margin-top: 5px;
	}
	.voucher_poin{
		display: flex;
		text-align: center;
		font-size: 12px;
		margin-top: 5px;
		align-items: center;
		justify-content: center;
	}
</style>
