<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Keep the optical brand experience on the index route with semantic CSS motion and native scrolling; this preserves accessibility without redundant animation libraries.
- Business enquiries use a validated server function and private Cloud tables with atomic rate limiting; visitors must never read submissions.
- Import authentic media through Lovable Assets pointers and keep the favicon as a real public file; this keeps application media lightweight.
