import * as React from 'react';
import * as Diff2Html from 'diff2html';
import 'diff2html/bundles/css/diff2html.min.css';


const templates = {
    'side-by-side-file-diff': `
<div id="{{fileHtmlId}}" class="d2h-file-wrapper" data-lang="{{file.language}}">
    <div class="d2h-files-diff">
        <div class="d2h-file-side-diff">
            <div class="d2h-code-wrapper">
                <table class="d2h-diff-table">
                    <tbody class="d2h-diff-tbody">
                    {{{diffs.left}}}
                    </tbody>
                </table>
            </div>
        </div>
        <div class="d2h-file-side-diff">
            <div class="d2h-code-wrapper">
                <table class="d2h-diff-table">
                    <tbody class="d2h-diff-tbody">
                    {{{diffs.right}}}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
  `,
};

export type DiffTableProps = {
    diff: string;
};

export default function DiffTable(props: DiffTableProps) {
    if (props.diff) {
        let diffFiles = Diff2Html.parse(props.diff);
        let html = Diff2Html.html(diffFiles, {
            drawFileList: false,
            matching: 'lines',
            outputFormat: 'side-by-side',
            rawTemplates: templates,
        });
        return (
            <div dangerouslySetInnerHTML={{ __html: html }} />
        );
    } else {
        return <span>No data!</span>;
    }
}
