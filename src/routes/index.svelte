<script lang="ts">
	import { base } from '$app/paths';
	import Button, { Icon, Label } from '@smui/button';
</script>

<div class="page">
	<img src={`${base}/jarj.png`} alt="Jarj" />

	<div class="header">
		<h1>#RunningForJarj</h1>
		<Button
			href="https://www.justgiving.com/fundraising/runningforjarj"
			variant="raised"
			><Label>Donate now</Label><Icon class="material-icons">favorite</Icon>
		</Button>
	</div>
	<p>
		On 16 & 17 July 2022, Team Squadron will be running from Keynsham in Bristol
		to the memorial garden at Loughborough University, raising money for Street
		Games UK.
	</p>
	<h2>Our Story</h2>
	<p>
		On 17 July 2014, our friend and teammate Ben Pocock (Jarj) boarded flight
		MH17 to begin an exciting 6-month placement in Perth, Australia.
		Unfortunately, he never made it, as flight MH17 was shot down as it flew
		over Ukraine, killing all 283 passengers and 15 crew members on board. This
		included our wonderful, lovable friend Jarj.
	</p>
	<p>
		We all met Jarj at Loughborough University whilst playing Ultimate Frisbee.
		Whilst he first entered the sport simply because he missed badminton trials
		and thought he’d give it a go, he quickly became an incredible player and an
		integral part of the team. On the pitch, he was a real athlete that always
		pushed himself and his teammates to be better. He would lead the way at
		training encouraging people to do extra fitness, and was definitely a huge
		driving force behind our success at a number of competitions.
	</p>
	<p>
		Off the pitch, Jarj was a very close and valued friend to all of us. He was
		one of the first in the mix on any night out, always keen for a beer, and
		not afraid to make a slight fool out of himself (alongside the rest of us!).
		He was an incredibly special and lovable person to know, with one of the
		biggest hearts imaginable.
	</p>
	<p>
		This year will mark 8 years since the downing of flight MH17, and to mark
		the occasion, Team Squadron had decided to do something slightly wild and
		run 237km from Keynsham (Ben’s hometown) to Loughborough University. We’ll
		be starting the challenge in the early hours of the Saturday morning,
		running as a relay throughout the night and aiming to finish at Loughborough
		University on the Sunday afternoon. We’ll be running in pairs which means
		that individually we’ll be covering anywhere between 26 and 62km – which is
		no mean feat!
	</p>
	<p>
		Planning for the challenge is well underway, and we’d absolutely love for
		your support with sponsorship as we look to raise money for a fantastic
		charity that Ben’s family have chosen in his memory – Street Games UK.
	</p>
	<p>
		To anyone who knew Ben who might be reading this – if you would like to get
		involved in the challenge in some way, we would love to hear from you.
		There’s lots of ways that you might be able to help, but we’ll also be
		inviting people to run the last section of the route with us in Ben’s
		memory.
	</p>
	<p>
		To get in touch with us, or to follow our journey to July, head on over to
		our Instagram page <a href="https://www.instagram.com/runningforjarj/">
			@runningforjarj
		</a>
		and join in the fun!
	</p>
</div>

<style type="text/scss">
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.page {
		text-align: center;
	}

	img {
		height: 200px;
	}
</style>
