import os
import sys
import urllib.request
from datetime import date

# Setup Django environment
sys.path.append(os.path.abspath(os.path.dirname(__file__)))
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")

import django
django.setup()

from blog.models import BlogPost

def download_image(url, filename):
    media_dir = os.path.join("media", "blog")
    os.makedirs(media_dir, exist_ok=True)
    filepath = os.path.join(media_dir, filename)
    
    if not os.path.exists(filepath):
        try:
            print(f"Downloading {url} to {filepath}...")
            req = urllib.request.Request(
                url, 
                headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
            )
            with urllib.request.urlopen(req) as response, open(filepath, 'wb') as out_file:
                out_file.write(response.read())
        except Exception as e:
            print(f"Failed to download {url}: {e}")
            return None
    return os.path.join("blog", filename)

def seed():
    dance_url = "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop"
    music_url = "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800&auto=format&fit=crop"
    expression_url = "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop"

    img_dance = download_image(dance_url, "bharatanatyam_evolution.jpg")
    img_music = download_image(music_url, "carnatic_music_career.jpg")
    img_expr = download_image(expression_url, "abhinaya_expression.jpg")

    posts_data = [
        {
            "title": "The Evolution of Bharatanatyam in the 21st Century",
            "slug": "evolution-of-bharatanatyam-21st-century",
            "short_description": "Discover how classical Indian dance is adapting to global stages while preserving its ancient spiritual lineage and foundational purity.",
            "content": """<h3>The Sacred Origins and Modern Stages</h3>
<p>Bharatanatyam, one of the oldest classical dance forms of India, has traveled a magnificent journey from the sacred temples of Tamil Nadu to the grandest theaters of Paris, London, and New York. Originally performed as a form of worship (Sadir), it was resurrected in the early 20th century, transitioning into a highly respected secular art form. Today, in the 21st century, the dance form is undergoing another profound transformation.</p>

<h3>Choreographic Innovations</h3>
<p>Modern choreographers are expanding the boundaries of Bharatanatyam. While the traditional Margam (the classical sequence of items) remains the gold standard of training, contemporary productions frequently explore thematic narratives. Dancers are collaborating with global musicians, mixing classical Carnatic beats with orchestration, and addressing relevant global themes such as climate change, gender roles, and mental health.</p>

<blockquote>"Tradition is not the worship of ashes, but the preservation of fire." — This quote perfectly encapsulates the spirit of modern Bharatanatyam gurus who innovate without diluting the rigorous geometric postures (Araimandi) and expressive codes.</blockquote>

<h3>Technology and the Global Classroom</h3>
<p>The digital age has democratized Bharatanatyam education. Online academies, interactive workshops, and high-definition video archives allow students from every corner of the world to learn under esteemed Gurus. As a career path, it has expanded from solo performances to dance therapy, academic research, and international performance tours, proving that classical art remains a viable, prestigious profession.</p>""",
            "author_name": "Guru Rukmini Devi",
            "featured_image": img_dance,
            "published_date": date(2026, 5, 15),
        },
        {
            "title": "From Practice to Profession: Navigating a Career in Carnatic Music",
            "slug": "career-in-carnatic-music",
            "short_description": "A comprehensive guide for young vocalists and instrumentalists looking to build a sustainable, rewarding career in the classical music industry.",
            "content": """<h3>The Calling of the Swaras</h3>
<p>For centuries, Carnatic music was pursued as a spiritual sadhana (devotional practice). However, the modern music ecosystem offers diverse avenues for talented artists to build professional careers. The journey from a student (sishya) practicing basic varisais to a professional stage performer requires not only vocal mastery but also strategic career planning.</p>

<h3>Diverse Career Pathways</h3>
<p>In the contemporary era, a Carnatic musician's career is multi-dimensional. A professional can engage in:
<ul>
  <li><strong>Concert Performances:</strong> Performing at prestigious venues, sabhas, and international cultural festivals.</li>
  <li><strong>Pedagogy and Teaching:</strong> Conducting structured online classes for a global student base, or joining university faculties.</li>
  <li><strong>Playback & Studio Recording:</strong> Lending classical expertise to films, fusion projects, and digital indie singles.</li>
  <li><strong>Musicology & Research:</strong> Documenting rare ragas, writing books, and analyzing ancient musical treatises.</li>
</ul>
</p>

<h3>Building Your Brand as a Classical Artist</h3>
<p>While artistic integrity is paramount, modern musicians must understand the digital landscape. Curating a professional online presence, sharing high-quality performance snippets, and networking within cultural societies are vital steps. Consistent practice, coupled with an understanding of concert dynamics (Manodharma), ensures that you stand out in the competitive world of classical performing arts.</p>""",
            "author_name": "Dr. K. Srinivasan",
            "featured_image": img_music,
            "published_date": date(2026, 5, 10),
        },
        {
            "title": "Understanding Abhinaya: The Art of Expressing the Inexpressible",
            "slug": "understanding-abhinaya-art-of-expression",
            "short_description": "Delving deep into the four facets of Abhinaya and how classical dancers translate complex spiritual poetry into evocative physical emotions.",
            "content": """<h3>What is Abhinaya?</h3>
<p>In classical Indian dance, particularly Bharatanatyam, technique (Nritta) is only half the canvas. The true soul of the performance lies in Abhinaya—the art of expression. Derived from the Sanskrit words 'Abhi' (towards) and 'Naya' (to lead), Abhinaya literally means leading the audience towards a specific emotional state (Rasa).</p>

<h3>The Four Pillars of Expression</h3>
<p>According to the Natyashastra, Abhinaya is divided into four distinct forms:
<ol>
  <li><strong>Angika Abhinaya:</strong> Expression through bodily movements, gestures (Mudras), and postures.</li>
  <li><strong>Vachika Abhinaya:</strong> Expression through speech, song, and dramatic voice modulation.</li>
  <li><strong>Aharya Abhinaya:</strong> Expression through costume, makeup, jewelry, and stage props.</li>
  <li><strong>Sattvika Abhinaya:</strong> Expression originating from deep, authentic inner feelings (tears, goosebumps, facial expressions).</li>
</ol>
</p>

<h3>Developing Emotional Depth</h3>
<p>Mastering Abhinaya requires maturity and a deep understanding of literature, mythology, and human psychology. A dancer must be able to depict the pining of a lover, the wrath of a deity, or the innocence of a child in a matter of seconds. It is this profound emotional connection that elevates classical dance from a physical exercise to a transcendent experience, holding the viewer spellbound.</p>""",
            "author_name": "Guru Meenakshi Sundaram",
            "featured_image": img_expr,
            "published_date": date(2026, 5, 1),
        }
    ]

    print("Clearing old blog posts...")
    BlogPost.objects.all().delete()

    print("Seeding blog posts...")
    for data in posts_data:
        post = BlogPost(
            title=data["title"],
            slug=data["slug"],
            short_description=data["short_description"],
            content=data["content"],
            author_name=data["author_name"],
            published_date=data["published_date"]
        )
        if data["featured_image"]:
            post.featured_image = data["featured_image"]
        post.save()
        print(f"Created post: {post.title}")

    print("Seeding completed successfully!")

if __name__ == "__main__":
    seed()
