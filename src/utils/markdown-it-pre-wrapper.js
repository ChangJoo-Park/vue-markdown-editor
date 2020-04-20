// Refrence https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/markdown/lib/preWrapper.js

export default function (md, { extraClass = '', languagePrefix = '' } = {}) {
  const wrap = (wrapped) => (...args) => {
    const [tokens, idx] = args;
    const token = tokens[idx];
    const rawCode = wrapped(...args);

    return (
      `<!--beforebegin--><div class="${languagePrefix}-${token.info.trim()} ${extraClass} extra-class" extra-attrs>` +
      `<!--afterbegin-->${rawCode}<!--beforeend--></div><!--afterend-->`
    );
  };

  const { fence, code_block: codeBlock } = md.renderer.rules;

  md.renderer.rules.fence = wrap(fence);
  md.renderer.rules.code_block = wrap(codeBlock);
}