import { RefreshCw } from 'lucide-react';

type BlogSyncBarProps = {
  syncing: boolean;
  onRefresh: () => void;
};

export default function BlogSyncBar({ syncing, onRefresh }: BlogSyncBarProps) {
  return (
    <div className="flex justify-end mb-6">
      <button
        type="button"
        onClick={onRefresh}
        disabled={syncing}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-fort-purple/30 text-fort-purple hover:bg-fort-purple/10 transition-colors disabled:opacity-60"
      >
        <RefreshCw className={`w-3.5 h-3.5 ${syncing ? 'animate-spin' : ''}`} />
        {syncing ? 'Syncing…' : 'Refresh now'}
      </button>
    </div>
  );
}
