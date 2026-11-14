import { sql, hasDb } from '@/lib/db';
import { LogoutButton } from '@/lib/admin-ui';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Admin | Capitano', robots: { index: false, follow: false } };

export default async function AdminPage() {
  if (!hasDb) {
    return (
      <div className="min-h-[100dvh] bg-background p-8">
        <div className="max-w-4xl mx-auto bg-surface p-8 border border-ink/10">
          <h2 className="text-2xl font-bold text-ink mb-4">Database Not Connected</h2>
          <p className="text-muted">Please connect your Neon database to view contact messages.</p>
        </div>
      </div>
    );
  }

  let messages = [];
  let error = null;

  try {
    messages = await sql`
      select * from contact_messages 
      order by created_at desc 
      limit 100
    `;
  } catch (e) {
    console.error(e);
    error = 'Failed to load messages from the database.';
  }

  return (
    <div className="min-h-[100dvh] bg-background">
      <header className="bg-surface border-b border-ink/10 px-4 py-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-ink">Capitano Admin</h1>
            <p className="text-xs text-muted">Manage your restaurant inquiries</p>
          </div>
          <LogoutButton />
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-ink mb-4">Contact Messages</h2>
          
          {error ? (
            <div className="p-4 bg-red-50 text-red-700 border border-red-200">
              {error}
            </div>
          ) : messages.length === 0 ? (
            <div className="p-12 text-center bg-surface border border-ink/10">
              <p className="text-muted">No messages received yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto border border-ink/10">
              <table className="min-w-full divide-y divide-ink/10 bg-surface">
                <thead className="bg-muted/5">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/10">
                  {messages.map((msg: any) => (
                    <tr key={msg.id} className="hover:bg-muted/5 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">
                        {new Date(msg.created_at).toLocaleDateString()}
                        <br />
                        {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-ink">
                        {msg.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-ink">
                        <div>{msg.phone}</div>
                        <div className="text-xs text-muted">{msg.email}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-ink max-w-xs truncate">
                        {msg.message}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
