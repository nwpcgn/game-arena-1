<script lang="ts">
</script>

<div class="grid h-full w-full grid-cols-[auto_1fr] border-[1px]">
	<aside class="flex h-full w-24 flex-col border-r p-1" data-testid="nav-rail">
		<header
			class="flex flex-col items-center justify-center gap-1"
			data-testid="nav-rail-header">
			<a
				class="rounded-container hover:preset-filled-surface-50-950 flex aspect-square w-full flex-col items-center justify-center gap-1 p-2"
				href="#"
				title="Menu"
				tabindex="0"
				data-testid="nav-tile">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-icon lucide lucide-menu">
						<line x1="4" x2="20" y1="12" y2="12"> </line>

						<line x1="4" x2="20" y1="6" y2="6"> </line>

						<line x1="4" x2="20" y1="18" y2="18"> </line>

						<!--]-->
					</svg>
				</div>
				<!--]-->
				<!--[!-->
				<!--]-->
				<!--[!-->
				<!--]-->
			</a>
		</header>
		<nav
			class="flex flex-1 flex-col items-center justify-center gap-1"
			data-testid="nav-rail-tiles">
			<!--#s1-s2-->
			<a
				class="rounded-container hover:preset-filled-surface-50-950 flex aspect-square w-full flex-col items-center justify-center gap-1 p-2"
				href="#/files"
				tabindex="0"
				data-testid="nav-tile">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-icon lucide lucide-folder">
						<path
							d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z">
						</path>

						<!--]-->
					</svg>
				</div>
				<!--]-->

				<div class="text-xs" data-testid="nav-tile-label">Files</div>
				<!--]-->
				<!--[!-->
				<!--]-->
			</a>

			<!--#s1-s3-->
			<a
				class="rounded-container hover:preset-filled-surface-50-950 flex aspect-square w-full flex-col items-center justify-center gap-1 p-2"
				href="#/images"
				tabindex="0"
				data-testid="nav-tile">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-icon lucide lucide-image">
						<rect width="18" height="18" x="3" y="3" rx="2" ry="2"> </rect>

						<circle cx="9" cy="9" r="2"> </circle>

						<path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"> </path>

						<!--]-->
					</svg>
				</div>
				<!--]-->

				<div class="text-xs" data-testid="nav-tile-label">Images</div>
				<!--]-->
				<!--[!-->
				<!--]-->
			</a>

			<!--#s1-s4-->
			<a
				class="rounded-container hover:preset-filled-surface-50-950 flex aspect-square w-full flex-col items-center justify-center gap-1 p-2"
				href="#/music"
				tabindex="0"
				data-testid="nav-tile">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-icon lucide lucide-music">
						<path d="M9 18V5l12-2v13"> </path>

						<circle cx="6" cy="18" r="3"> </circle>

						<circle cx="18" cy="16" r="3"> </circle>

						<!--]-->
					</svg>
				</div>
				<!--]-->

				<div class="text-xs" data-testid="nav-tile-label">Music</div>
				<!--]-->
				<!--[!-->
				<!--]-->
			</a>

			<!--#s1-s5-->
			<a
				class="rounded-container hover:preset-filled-surface-50-950 flex aspect-square w-full flex-col items-center justify-center gap-1 p-2"
				href="#/videos"
				tabindex="0"
				data-testid="nav-tile">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-icon lucide lucide-video">
						<path
							d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5">
						</path>

						<rect x="2" y="6" width="14" height="12" rx="2"> </rect>

						<!--]-->
					</svg>
				</div>
				<!--]-->

				<div class="text-xs" data-testid="nav-tile-label">Videos</div>
				<!--]-->
				<!--[!-->
				<!--]-->
			</a>
		</nav>
		<footer
			class="flex flex-col items-center justify-center gap-1"
			data-testid="nav-rail-footer">
			<!--#s1-s6-->
			<a
				class="rounded-container hover:preset-filled-surface-50-950 flex aspect-square w-full flex-col items-center justify-center gap-1 p-2"
				href="#settings"
				title="settings"
				tabindex="0"
				data-testid="nav-tile">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-icon lucide lucide-settings">
						<path
							d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z">
						</path>

						<circle cx="12" cy="12" r="3"> </circle>

						<!--]-->
					</svg>
				</div>
				<!--]-->
				<!--[!-->
				<!--]-->
				<!--[!-->
				<!--]-->
			</a>
		</footer>
	</aside>
	<article class="relative overflow-hidden">
		<section class="page-layer nwp">
			<div
				class="lg:bg-base-200 rounded-box grid grid-cols-1 gap-6 lg:p-10 xl:grid-cols-3">
				<div class="card compact side bg-base-100 shadow-lg">
					<div class="card-body flex-row items-center space-x-4">
						<div>
							<div class="avatar">
								<div class="h-14 w-14 rounded-full shadow">
									<img src="https://i.pravatar.cc/500?img=32" />
								</div>
							</div>
						</div>
						<div>
							<h2 class="card-title">Janis Johnson</h2>
							<p class="text-base-content text-opacity-40">Accounts Agent</p>
						</div>
					</div>
				</div>
				<div class="card compact side bg-base-100 shadow-lg">
					<div class="card-body flex-row items-center space-x-4">
						<div class="flex-1">
							<h2 class="card-title">Meredith Mayer</h2>
							<p class="text-base-content text-opacity-40">Data Liaison</p>
						</div>
						<div class="flex-0"><button class="btn btn-sm">Follow</button></div>
					</div>
				</div>
				<div class="card compact bg-base-100 row-span-3 shadow-lg">
					<figure><img src="https://picsum.photos/id/1005/600/400" /></figure>
					<div class="card-body flex-row items-center space-x-4">
						<div>
							<h2 class="card-title">Karolann Collins</h2>
							<p class="text-base-content text-opacity-40">
								Direct Interactions Liaison
							</p>
						</div>
					</div>
				</div>
				<div class="card compact side bg-base-100 shadow-lg">
					<div class="card-body flex-row items-center space-x-4">
						<div class="flex-1">
							<h2 class="card-title text-primary">4,600</h2>
							<p class="text-base-content text-opacity-40">Page views</p>
						</div>
						<div class="flex flex-0 space-x-2">
							<button class="btn btn-sm btn-square"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									class="inline-block h-6 w-6 stroke-current">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
									></path>
								</svg></button>
							<button class="btn btn-sm btn-square"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									class="inline-block h-6 w-6 stroke-current">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
									></path>
								</svg></button>
						</div>
					</div>
				</div>
				<div class="card compact side bg-base-100 shadow-lg">
					<div class="card-body flex-row items-center space-x-4">
						<label class="flex-0">
							<div>
								<input
									type="checkbox"
									checked="checked"
									class="toggle toggle-primary" />
								<span class="toggle-mark"></span>
							</div>
						</label>
						<div class="flex-1">
							<h2 class="card-title">Enable Notifications</h2>
							<p class="text-base-content text-opacity-40">
								To get latest updates
							</p>
						</div>
					</div>
				</div>
				<div
					class="card bg-base-100 col-span-1 row-span-3 shadow-lg xl:col-span-2">
					<div class="card-body">
						<h2 class="card-title my-4 text-4xl font-bold">
							Top 10 UI Components
						</h2>
						<div class="card-actions mb-4 space-x-2">
							<div class="badge badge-ghost">Colors</div>
							<div class="badge badge-ghost">UI Design</div>
							<div class="badge badge-ghost">Creativity</div>
						</div>
						<p>
							Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
							Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
							iure sapiente.
						</p>
						<div class="card-actions justify-end space-x-2">
							<button class="btn btn-primary">Login</button>
							<button class="btn">Register</button>
						</div>
					</div>
				</div>
				<div class="card compact side bg-base-100 shadow-lg">
					<div class="card-body flex-row items-center space-x-4">
						<div class="flex-1">
							<h2 class="card-title flex">
								<button class="btn btn-ghost btn-sm btn-circle loading"
								></button> Downloading...
							</h2>
							<progress value="70" max="100" class="progress progress-secondary"
							></progress>
						</div>
						<div class="flex-0">
							<button class="btn btn-circle"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									class="inline-block h-6 w-6 stroke-current">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12"></path>
								</svg></button>
						</div>
					</div>
				</div>
				<div class="card compact side bg-base-100 shadow-lg">
					<div class="card-body flex-row items-center space-x-4">
						<label class="label cursor-pointer">
							<div checked="checked">
								<input
									type="checkbox"
									checked="checked"
									class="checkbox checkbox-accent" />
								<span class="checkbox-mark"></span>
							</div>
							<span class="label-text mx-4">Enable Autosave</span>
						</label>
					</div>
				</div>
				<ul
					class="menu bg-base-100 text-base-content text-opacity-40 rounded-box row-span-3 p-4 shadow-lg">
					<li class="menu-title"><span>Menu Title</span></li>
					<li>
						<a
							><svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="mr-2 inline-block h-5 w-5 stroke-current">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
								></path>
							</svg> Item with icon</a>
					</li>
					<li>
						<a
							><svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="mr-2 inline-block h-5 w-5 stroke-current">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
							</svg> Item with icon</a>
					</li>
					<li>
						<a
							><svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="mr-2 inline-block h-5 w-5 stroke-current">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
								></path>
							</svg> Item with icon</a>
					</li>
				</ul>
				<div class="alert bg-base-100 col-span-1 xl:col-span-2">
					<div class="flex-1">
						<label class="mx-3"
							>Lorem ipsum dolor sit amet, consectetur adip!</label>
					</div>
					<div class="flex-none">
						<button class="btn btn-sm btn-ghost mr-2">Cancel</button>
						<button class="btn btn-sm btn-primary">Apply</button>
					</div>
				</div>
				<div class="alert alert-info col-span-1 xl:col-span-2">
					<div class="flex-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="mx-2 h-6 w-6 stroke-current">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							></path>
						</svg><label>Lorem ipsum dolor sit amet, consectetur adip!</label>
					</div>
				</div>
				<div class="alert alert-success col-span-1 xl:col-span-2">
					<div class="flex-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="mx-2 h-6 w-6 stroke-current">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
							></path>
						</svg><label>Lorem ipsum dolor sit amet, consectetur adip!</label>
					</div>
				</div>
			</div>
		</section>
	</article>
</div>
