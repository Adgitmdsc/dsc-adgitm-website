import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function BlogCard() {
  return (
    <div className="container blog-page">
      <h1 className="text-light heading">BLOGS</h1>
      <hr />
      <section className="blog-cards-wrapper">
        <div className="blog-card-grid-space">
          <a
            className="blog-card"
            href="https://codetheweb.blog/2017/10/06/html-syntax/"
            target="_blank"
            rel="noreferrer"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/basic-types-of-html-tags/cover.jpg)`,
            }}
          >
            <div>
              <h1>HTML Syntax</h1>
              <p>
                The syntax of a language is how it works. How to actually write
                it. Learn HTML syntax…
              </p>
              <div className="date">6 Oct 2017</div>
              <div className="tags">
                <div className="tag">HTML</div>
              </div>
            </div>
          </a>
        </div>
        <div className="blog-card-grid-space">
          <a
            className="blog-card"
            href="https://codetheweb.blog/2017/10/09/basic-types-of-html-tags/"
            target="_blank"
            rel="noreferrer"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/basic-types-of-html-tags/cover.jpg)`,
            }}
          >
            <div>
              <h1>Basic types of HTML tags</h1>
              <p>Learn about some of the most common HTML tags…</p>
              <div className="date">9 Oct 2017</div>
              <div className="tags">
                <div className="tag">HTML</div>
              </div>
            </div>
          </a>
        </div>
        <div className="blog-card-grid-space">
          <a
            className="blog-card"
            href="https://codetheweb.blog/2017/10/14/links-images-about-file-paths/"
            target="_blank"
            rel="noreferrer"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(http://www.geekrepublic.co.za/wp-content/uploads/2018/12/eat-sleep-code-repeat-design.jpg)`,
            }}
          >
            <div>
              <h1>New Blogs Coming Soon</h1>
              <p>Wait Until 🤔</p>
              <div className="date">25 Oct 2021</div>
              <div className="tags">
                <div className="tag">DSC ADGITM</div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default BlogCard;
