import { TokenCard } from '@/components/ui/TokenCard';
import { TotalBalanceCard } from '@/components/ui/TotalBalanceCard';
import { Button, Grid, Metric, Subtitle } from '@tremor/react';

export default function Home() {
	return (
		<section>
			<div className="flex justify-between items-center">
				<div className="flex flex-col gap-3">
					<Metric>Dashboard</Metric>
					<Subtitle>View your projects overview details</Subtitle>
				</div>
				<Button
					variant="secondary"
					className="!rounded-tremor-button border-default-border text-black"
					color="stone"
				>
					Send or Receive
				</Button>
			</div>
			<div className="w-fit mt-5">
				<TotalBalanceCard />
			</div>
			<Grid numItems={3} className="gap-6">
				<TokenCard />
				<TokenCard />
				<TokenCard />
			</Grid>
		</section>
	);
}
