export default function ContactSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        <div className="max-w-md mx-auto">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="font-bold">Email:</span>
              <a href="mailto:your.email@example.com" className="text-blue-600">your.email@example.com</a>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold">GitHub:</span>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600">github.com/yourusername</a>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold">LinkedIn:</span>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600">linkedin.com/in/yourusername</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 